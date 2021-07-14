import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthStoreProxy, routesBlank } from '@artur-ba/shared/test-helpers';
import { AuthStore } from '@artur-ba/shared/service';

import { SpotifyTokenInterceptor } from './spotify-token.interceptor';

describe('SpotifyTokenInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let authStore: AuthStoreProxy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routesBlank(['login'])),
      ],
      providers: [
        AuthStoreProxy,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SpotifyTokenInterceptor,
          multi: true,
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    authStore = TestBed.inject(AuthStoreProxy);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should ignore all request which are not for spotify', () => {
    httpClient.get('login').subscribe();
    const httpRequest = httpMock.expectOne(() => true);

    expect(httpRequest.request.headers.keys).toHaveLength(0);
  });

  describe('user logged', () => {
    beforeAll(() => {
      authStore.saveTokenDataProxy();
    });
    afterAll(() => {
      authStore.logout();
    });
    it('should add header token for logged user', () => {
      httpClient.get(SpotifyTokenInterceptor.spotifyApiUrl + 'foo').subscribe();

      const httpRequest = httpMock.expectOne(() => true);

      expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
    });
    it('should try to refresh token if 401 returned (timeout of login)', inject(
      [AuthStore],
      (authStore: AuthStore) => {
        spyOn<any>(authStore, 'refreshToken');
        httpClient
          .get(SpotifyTokenInterceptor.spotifyApiUrl + 'foo')
          .subscribe();

        httpMock
          .expectOne(() => true)
          .flush(null, { status: 401, statusText: 'unauthorized' });

        expect(authStore.refreshToken).toHaveBeenCalled();
      },
    ));
  });

  describe('user logout', () => {
    it('should redirect to login page if 401 returned (timeout of login)', inject(
      [Router],
      (router: Router) => {
        spyOn(router, 'navigate');
        httpClient
          .get(SpotifyTokenInterceptor.spotifyApiUrl + 'foo')
          .subscribe();

        httpMock
          .expectOne(() => true)
          .flush(null, { status: 401, statusText: 'unauthorized' });

        expect(router.navigate).toBeCalled();
      },
    ));
    it('should redirect to login page if 403 returned (timeout of login)', inject(
      [Router],
      (router: Router) => {
        spyOn(router, 'navigate');
        httpClient
          .get(SpotifyTokenInterceptor.spotifyApiUrl + 'foo')
          .subscribe();

        httpMock
          .expectOne(() => true)
          .flush(null, { status: 403, statusText: 'unauthorized' });

        expect(router.navigate).toBeCalled();
      },
    ));
  });
});
