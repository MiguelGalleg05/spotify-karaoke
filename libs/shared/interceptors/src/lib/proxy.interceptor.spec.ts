import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProxyInterceptor } from './proxy.interceptor';

describe('ProxyInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ProxyInterceptor, multi: true },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should redirect all from proxy table to localhost', () => {
    const proxyUrl = `${ProxyInterceptor.proxies[0]}/123`;

    httpClient.get(proxyUrl).subscribe();
    const httpRequest = httpMock.expectOne(() => true);

    expect(httpRequest.request.url).toMatch(`localhost/${proxyUrl}`);
  });

  it('should not redirect any other to localhost', () => {
    const nonProxyUrl = 'login';

    httpClient.get(nonProxyUrl).subscribe();
    const httpRequest = httpMock.expectOne(() => true);

    expect(httpRequest.request.url).not.toMatch(`localhost/${nonProxyUrl}`);
  });
});
