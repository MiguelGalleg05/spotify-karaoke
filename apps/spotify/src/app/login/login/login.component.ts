import { Component, OnDestroy, OnInit } from '@angular/core';

import { catchError, map, retry, tap } from 'rxjs/operators';
import { GaActionEnum, GoogleAnalyticsService } from 'ngx-google-analytics';
import { of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AuthStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isSpotifyCallback = false;

  constructor(
    protected readonly authStore: AuthStore,
    protected readonly route: ActivatedRoute,
    protected readonly $gaService: GoogleAnalyticsService,
  ) {}
  protected subscriptions: Subscription[] = [];

  error: Error;

  ngOnInit(): void {
    this.isSpotifyCallback = this.route.snapshot.data['spotify_callback'];
    if (this.isSpotifyCallback) {
      this.handleSpotifyCallback();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  protected handleSpotifyCallback(): void {
    this.$gaService.event(
      GaActionEnum.LOGIN,
      'Login',
      'User authorization spotify succeed',
    );
    this.subscriptions.push(
      this.route.queryParams
        .pipe(
          map((params) => {
            if (params['error']) {
              throw new Error(params['error']);
            }
            return params['code'];
          }),
          tap((code) => {
            return this.authStore.generateJWT(code);
          }),
          retry(3),
          catchError((error) => {
            this.error = error;
            return of(null);
          }),
        )
        .subscribe(),
    );
  }

  auth(): void {
    this.$gaService.event(
      GaActionEnum.LOGIN,
      'Login',
      'User authorization spotify called',
    );
    this.authStore.authorize();
  }
}
