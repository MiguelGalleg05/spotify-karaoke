import { from, Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CountryService } from '@artur-ba/shared/service';

import { spotifyAPIRegex } from './spotify-token.interceptor';

@Injectable()
export class SpotifyMarketInterceptor implements HttpInterceptor {
  static readonly marketKey = 'market';

  constructor(protected readonly countryService: CountryService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (!spotifyAPIRegex.test(request.url) || request.method !== 'GET') {
      return next.handle(request);
    }
    return from(this.addMarketParamToRequest(request, next));
  }

  protected async addMarketParamToRequest(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Promise<HttpEvent<unknown>> {
    const userCountry = await this.countryService.getUserCountry();
    request = request.clone({
      params: request.params.append(
        SpotifyMarketInterceptor.marketKey,
        userCountry,
      ),
    });
    return next.handle(request).toPromise();
  }
}
