import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Injectable } from '@angular/core';

import { spotifyAPIRegex } from './spotify-token.interceptor';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  protected readonly snackbarConfig: MatSnackBarConfig = {
    duration: 2500,
    panelClass: 'error-snackbar',
  };

  protected readonly dismissMessage = $localize`:error-interceptor.dismiss:Dismiss`;

  constructor(
    protected readonly snackBar: MatSnackBar,
    protected readonly $gaService: GoogleAnalyticsService,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (spotifyAPIRegex.test(error.url) && error.status !== 401) {
          this.handleSpotifyError(error);
        }
        this.$gaService.exception(error);
        return throwError(error.message);
      }),
    );
  }

  protected handleSpotifyError(error: any): void {
    this.snackBar.open(
      error.error.error.message,
      this.dismissMessage,
      this.snackbarConfig,
    );
  }
}
