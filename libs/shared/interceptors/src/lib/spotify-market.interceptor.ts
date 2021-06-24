import { from, Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CountryService } from '@artur-ba/shared/service';

@Injectable()
export class SpotifyMarketInterceptor implements HttpInterceptor {
  static readonly spotifyApiUrl = 'https://api.spotify.com/';
  static readonly marketKey = 'market';
  protected readonly spotifyAPIRegex = new RegExp(
    `^${SpotifyMarketInterceptor.spotifyApiUrl}`
  );

  constructor(protected readonly countryService: CountryService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.spotifyAPIRegex.test(request.url)) {
      return next.handle(request);
    }
    return from(this.addMarketParamToRequest(request, next));
  }

  protected async addMarketParamToRequest(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Promise<HttpEvent<unknown>> {
    const userCountry = await this.countryService.getUserCountry();
    request = request.clone({
      params: request.params.append(
        SpotifyMarketInterceptor.marketKey,
        userCountry
      ),
    });
    return next.handle(request).toPromise();
  }
}
