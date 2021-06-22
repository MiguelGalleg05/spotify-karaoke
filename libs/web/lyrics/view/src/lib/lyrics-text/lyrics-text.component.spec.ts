import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { lyricsElvis } from '@artur-ba/shared/test-helpers';
import { LyricsParser } from '@artur-ba/web/lyrics/model';

import { LyricsTextComponent } from './lyrics-text.component';

describe('LyricsTextComponent', () => {
  let component: LyricsTextComponent;
  let fixture: ComponentFixture<LyricsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyricsTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsTextComponent);
    component = fixture.componentInstance;
    component.currentTime = 10000;
    component.lyrics = LyricsParser.lrcParser(lyricsElvis);
    fixture.detectChanges();
  });

  it('should render one active lyric', () => {
    const activeLyrics = fixture.debugElement.queryAll(By.css('.active'));

    expect(activeLyrics).toHaveLength(1);
  });
  it('should render selected count of prepared lyric', () => {
    const preparedLyrics = fixture.debugElement.queryAll(By.css('.prepared'));

    expect(preparedLyrics).toHaveLength(component.linesPrepared * 2);
  });
  it('should render selected count of visible lyric', () => {
    const visibleLyrics = fixture.debugElement.queryAll(By.css('.visible'));

    expect(visibleLyrics).toHaveLength(component.linesVisible * 2);
  });
});
