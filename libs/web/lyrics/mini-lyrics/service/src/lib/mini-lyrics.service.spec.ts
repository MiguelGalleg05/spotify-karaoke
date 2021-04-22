import { TestBed } from '@angular/core/testing';

import { MiniLyricsService } from './mini-lyrics.service';

xdescribe('MiniLyricsService', () => {
  let service: MiniLyricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniLyricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
