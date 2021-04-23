import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthStore } from '@artur-ba/shared/service';

@Injectable()
export class SpotifyTokenInterceptor implements HttpInterceptor {
  protected token: string;
  protected readonly spotifyAPIRegex = new RegExp('^https://api.spotify.com');

  constructor(protected authStore: AuthStore) {
    this.authStore.token$.subscribe((token) => {
      this.token = token;
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.token || this.spotifyAPIRegex.test(request.url)) {
      next.handle(request);
    }
    request = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.token),
    });
    return next.handle(request);
  }
}
