import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CountryService } from '@artur-ba/shared/service';
import { routesBlank } from '@artur-ba/shared/test-helpers';

import { SpotifyMarketInterceptor } from './spotify-market.interceptor';

describe('SpotifyMarketInterceptor', () => {
  const appRoute = 'login';
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  const countryServiceMock = {
    getUserCountry: jest.fn(() => Promise.resolve('xx')),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routesBlank([appRoute])),
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SpotifyMarketInterceptor,
          multi: true,
        },
        { provide: CountryService, useValue: countryServiceMock },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should ignore all request which are not for spotify', () => {
    httpClient.get(appRoute).subscribe();

    const httpRequest = httpMock.expectOne(() => true);

    expect(httpRequest.request.params.keys).toHaveLength(0);
  });

  describe('when request to spotify API', () => {
    it('should add a new market param to request', fakeAsync(() => {
      httpClient
        .get(SpotifyMarketInterceptor.spotifyApiUrl + 'foo')
        .subscribe();
      tick();

      const httpRequest = httpMock.expectOne(() => true);

      expect(
        httpRequest.request.params.has(SpotifyMarketInterceptor.marketKey),
      ).toBeTruthy();
    }));

    it('should keep the old params data', fakeAsync(() => {
      const paramsValues = { foo: 'foo' };
      let params = new HttpParams();
      Object.keys(paramsValues).forEach((paramKey) => {
        params = params.append(paramKey, paramsValues[paramKey]);
      });
      httpClient
        .get(SpotifyMarketInterceptor.spotifyApiUrl + 'foo', { params })
        .subscribe();
      tick();

      const httpRequest = httpMock.expectOne(() => true);

      const requestParams = httpRequest.request.params;
      Object.keys(paramsValues).forEach((paramKey) => {
        expect(requestParams.get(paramKey)).toEqual(paramsValues[paramKey]);
      });
      expect(
        requestParams.has(SpotifyMarketInterceptor.marketKey),
      ).toBeTruthy();
    }));
  });
});
