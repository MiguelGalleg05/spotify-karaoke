import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthStore, EnvSettingsService } from '@artur-ba/shared/service';
import { AuthStoreProxy, routesBlank } from '@artur-ba/shared/test-helpers';

import { SpotifyTokenInterceptor } from './spotify-token.interceptor';

const spotifyApiUrl = 'https://api.spotify.com/';

describe('SpotifyTokenInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let authStore: AuthStoreProxy;
  const EnvSettingsServiceMock = {
    spotify_client_id: 'clientId',
    spotify_client_secret: 'clientSecret',
  };

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
        { provide: EnvSettingsService, useValue: EnvSettingsServiceMock },
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
      httpClient.get(spotifyApiUrl + 'logged').subscribe();

      httpMock.match('https://accounts.spotify.com/api/token');
      const httpRequest = httpMock.expectOne(() => true);

      expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
    });
    it('should try to refresh token if 401 returned (timeout of login)', inject(
      [AuthStore],
      (authStore: AuthStore) => {
        jest.spyOn(authStore, 'refreshToken');
        httpClient.get(spotifyApiUrl + 'logged401').subscribe();

        httpMock.match('https://accounts.spotify.com/api/token');
        httpMock
          .expectOne(() => true)
          .flush(null, { status: 401, statusText: 'unauthorized' });

        expect(authStore.refreshToken).toHaveBeenCalled();
        httpMock.match('https://accounts.spotify.com/api/token');
      },
    ));
  });

  describe('user logout', () => {
    it('should redirect to login page if 401 returned (timeout of login)', inject(
      [Router],
      (router: Router) => {
        jest.spyOn(router, 'navigate');
        httpClient.get(spotifyApiUrl + 'foo').subscribe();

        httpMock
          .expectOne(() => true)
          .flush(null, { status: 401, statusText: 'unauthorized' });

        expect(router.navigate).toBeCalled();
      },
    ));
    it('should redirect to login page if 403 returned (timeout of login)', inject(
      [Router],
      (router: Router) => {
        jest.spyOn(router, 'navigate');
        httpClient.get(spotifyApiUrl + 'foo').subscribe();

        httpMock
          .expectOne(() => true)
          .flush(null, { status: 403, statusText: 'unauthorized' });

        expect(router.navigate).toBeCalled();
      },
    ));
  });
});
