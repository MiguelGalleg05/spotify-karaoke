import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  const MatSnackBarMock = { open: jest.fn() };
  const GoogleAnalyticsServiceMock = { exception: jest.fn() };
  const proxyUrl = `some-url`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: MatSnackBar, useValue: MatSnackBarMock },
        {
          provide: GoogleAnalyticsService,
          useValue: GoogleAnalyticsServiceMock,
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should not catch any request without error', () => {
    httpClient.get(proxyUrl).subscribe();
    httpMock.expectOne(() => true);

    expect(MatSnackBarMock.open).not.toHaveBeenCalled();
    expect(GoogleAnalyticsServiceMock.exception).not.toHaveBeenCalled();
  });

  it('should call an google analytics for an not spotify error', () => {
    httpClient.get(proxyUrl).subscribe();
    httpMock
      .expectOne(() => true)
      .flush(null, { status: 403, statusText: 'unauthorized' });

    expect(MatSnackBarMock.open).not.toHaveBeenCalled();
    expect(GoogleAnalyticsServiceMock.exception).toHaveBeenCalled();
  });

  it('should call an google analytics and open a dialog for a spotify error', () => {
    httpClient.get('https://api.spotify.com/api/play').subscribe();

    httpMock
      .expectOne(() => true)
      .flush(
        { error: { message: 'You need premium' } },
        { status: 403, statusText: 'forbidden' },
      );

    expect(MatSnackBarMock.open).toHaveBeenCalled();
    expect(GoogleAnalyticsServiceMock.exception).toHaveBeenCalled();
  });
});
