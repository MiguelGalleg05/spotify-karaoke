import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CardListViewMode } from '@artur-ba/web/spotify/shared/view';
import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { UserSettingsService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggleControl = new FormControl(false);
  playlists: SpotifyApi.PlaylistObjectFull[] = [];

  readonly CardListViewMode = CardListViewMode;
  readonly singAlongTitle = $localize`:dashboard.sing_along:Sing along`;

  protected readonly playlistUrls = ['37i9dQZF1DXc7aGdJ1YSSD'];

  constructor(
    protected readonly userSettings: UserSettingsService,
    protected readonly cdr: ChangeDetectorRef,
    protected readonly spotifyService: SpotifyDataService,
  ) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.userSettings.darkMode(darkMode);
    });
    this.initAlbums();
  }

  protected async initAlbums(): Promise<void> {
    this.playlists = await Promise.all([
      ...this.playlistUrls.map((playlistUrl) =>
        this.spotifyService.getPlaylist(playlistUrl),
      ),
    ]);
  }
}
