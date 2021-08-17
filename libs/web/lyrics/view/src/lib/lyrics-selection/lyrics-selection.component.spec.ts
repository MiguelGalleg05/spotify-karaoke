import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import {
  createSpyObj,
  MatDialogServiceMock,
} from '@artur-ba/shared/test-helpers';
import { MiniLyricsService } from '@artur-ba/web/lyrics/mini-lyrics/service';
import { PlayerStore } from '@artur-ba/shared/service';

import {
  LyricsSearchState,
  LyricsSelectionComponent,
} from './lyrics-selection.component';

describe('LyricsComponent', () => {
  let component: LyricsSelectionComponent;
  let fixture: ComponentFixture<LyricsSelectionComponent>;

  const miniLyricsServiceMock = createSpyObj('MiniLyricsService', [
    'getLyrics',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [LyricsSelectionComponent],
      providers: [
        { provide: MatDialog, useClass: MatDialogServiceMock },
        { provide: MiniLyricsService, useValue: miniLyricsServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('new track', () => {
    let playerStore: PlayerStore;

    function setTrack(name: string = 'new'): void {
      playerStore.setState({
        playbackState: {
          track_window: {
            current_track: { name: 'new' } as Spotify.Track,
          } as Spotify.PlaybackTrackWindow,
        } as Spotify.PlaybackState,
      });
    }

    let spy;
    beforeEach(() => {
      playerStore = TestBed.inject(PlayerStore);
      spy = jest.spyOn(component.state, 'emit');
    });
    afterEach(() => {
      spy.mockReset();
    });
    it('should emit event on new track', fakeAsync(() => {
      setTrack();

      expect(spy).toHaveBeenCalledWith({ state: LyricsSearchState.SEARCHING });
      spy.mockReset();

      tick();
      expect(spy).toHaveBeenCalledWith({
        state: LyricsSearchState.SEARCH_FAILED,
      });
    }));

    it('should not emit event on same track', () => {
      setTrack();
      expect(spy).toHaveBeenCalledWith({ state: LyricsSearchState.SEARCHING });
      spy.mockReset();

      setTrack();
      expect(spy).not.toHaveBeenCalled();
    });
  });

  it('should call dialog service on click', async () => {
    const dialogServiceMock = TestBed.inject(MatDialog);
    component.openLyricsDialog();
    expect(dialogServiceMock.open).toHaveBeenCalled();
  });
});
