import { ActivatedRoute, Router } from '@angular/router';

import {
  HttpBackend,
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { EnvSettingsService } from './env-settings.service';
import { SpotifyAuthorize } from './models/spotify-authorize';

export interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected httpBackend: HttpBackend,
    protected env: EnvSettingsService,
  ) {
    this.http = new HttpClient(httpBackend);
    this.init();
  }
  static readonly access_token_key = 'access_token';
  static readonly refresh_token_key = 'refresh_token';
  static readonly return_url_key = 'returnUrl';

  access_token_sub$ = new BehaviorSubject(this.access_token);
  protected readonly tokenUrl = 'https://accounts.spotify.com/api/token';
  protected tokenRefreshTimer;
  protected http: HttpClient;

  protected init(): void {
    if (!this.isLogged()) {
      return;
    }
    this.refreshToken();
  }

  get access_token(): string {
    return localStorage.getItem(AuthStore.access_token_key);
  }

  get refresh_token(): string {
    return localStorage.getItem(AuthStore.refresh_token_key);
  }

  protected set returnUrl(returnUrl: string) {
    localStorage.setItem(AuthStore.return_url_key, returnUrl);
  }

  protected get returnUrl(): string {
    const return_url = localStorage.getItem(AuthStore.return_url_key);
    localStorage.removeItem(AuthStore.return_url_key);
    return return_url;
  }

  protected get headers(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded;')
      .set(
        'Authorization',
        `Basic ${btoa(
          this.env.spotify_client_id + ':' + this.env.spotify_client_secret,
        )}`,
      );
  }

  async generateJWT(code: string): Promise<void> {
    const params = new HttpParams().appendAll({
      grant_type: 'authorization_code',
      code: encodeURIComponent(code),
      redirect_uri: `${window.location.origin}/spotify/`,
    });
    const token = await this.http
      .post<SpotifyTokenResponse>(this.tokenUrl, params.toString(), {
        headers: this.headers,
      })
      .toPromise();
    this.login(token);
    this.router.navigate([this.returnUrl]);
  }

  async authorize() {
    const spotifyAuthorize = new SpotifyAuthorize();
    const url = spotifyAuthorize.createAuthorizeURL(this.env.spotify_client_id);

    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params[AuthStore.return_url_key] || '';
      window.location.href = url;
    });
  }

  async refreshToken(): Promise<void> {
    this.saveTokenData(await this.getRefreshToken());
  }

  protected login(token: SpotifyTokenResponse): void {
    this.saveTokenData(token);
    this.initTokenRefreshInterval(token);
  }

  protected initTokenRefreshInterval({
    expires_in,
  }: SpotifyTokenResponse): void {
    this.tokenRefreshTimer = setInterval(
      () => this.refreshToken(),
      expires_in * 0.9 * 1000,
    );
  }

  protected stopTokenRefreshTimer(): void {
    clearInterval(this.tokenRefreshTimer);
  }

  protected saveTokenData(token: SpotifyTokenResponse): void {
    Object.keys(token).forEach((key) => {
      localStorage.setItem(key, token[key]);
    });
    this.access_token_sub$.next(token.access_token);
  }

  protected async getRefreshToken(): Promise<SpotifyTokenResponse> {
    const params = new HttpParams().appendAll({
      grant_type: 'refresh_token',
      refresh_token: this.refresh_token,
    });
    this.access_token_sub$.next(null);
    return this.http
      .post<SpotifyTokenResponse>(this.tokenUrl, params.toString(), {
        headers: this.headers,
      })
      .toPromise();
  }

  logout(): void {
    localStorage.removeItem(AuthStore.access_token_key);
    localStorage.removeItem(AuthStore.refresh_token_key);
    this.stopTokenRefreshTimer();
    this.router.navigate(['login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem(AuthStore.access_token_key);
  }
}
