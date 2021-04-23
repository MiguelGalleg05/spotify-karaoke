import { TestBed } from '@angular/core/testing';

import { SpotifyTokenInterceptor } from './spotify-token.interceptor';

describe('SpotifyTokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [SpotifyTokenInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: SpotifyTokenInterceptor = TestBed.inject(
      SpotifyTokenInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
