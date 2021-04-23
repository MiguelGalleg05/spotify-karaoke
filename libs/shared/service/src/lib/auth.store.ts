import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { SpotifyAuthorize } from './models/spotify-authorize';
import { StateInterface } from './state-interface';

export interface AuthState {
  accessToken: string | null;
  tokenType: string | null;
  expiresIn: number;
  state: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStore extends StateInterface<AuthState> {
  constructor(protected router: Router, protected route: ActivatedRoute) {
    super();
    this.setState({} as AuthState);
  }

  readonly token$ = this.state$.pipe(
    filter((p) => !!p.accessToken),
    map((p) => p.accessToken)
  ) as Observable<string>;

  init(): void {
    this.initAuth();
  }

  redirectToAuthorize() {
    const spotifyAuthorize = new SpotifyAuthorize();
    const url = spotifyAuthorize.createAuthorizeURL();
    window.location.href = url;
  }

  protected initAuth() {
    if (!window.location.hash) {
      this.redirectToAuthorize();
    }

    return this.route.fragment
      .pipe(
        filter((fragment) => !!fragment),
        map((fragment) => new URLSearchParams(fragment)),
        map((params) => ({
          accessToken: params.get('access_token'),
          tokenType: params.get('token_type'),
          expiresIn: Number(params.get('expires_in')),
          state: params.get('state'),
        })),
        tap((params) => {
          this.setState(params);
        }),
        tap(() => {
          this.router.navigate([]);
        })
      )
      .subscribe();
  }
}
