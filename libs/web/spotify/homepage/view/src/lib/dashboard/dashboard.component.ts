import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CardListViewMode } from '@artur-ba/web/spotify/shared/view';
import { SpotifyPlaylistDataService } from '@artur-ba/web/spotify/shared/service';
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

  protected readonly playlistUrls = [
    '37i9dQZF1DXc7aGdJ1YSSD',
    '5AAqhBRMIR0kANietc1E7m',
    '37i9dQZF1DX0mi9kezFJ0K',
    '37i9dQZF1DX1Mj6nQRkc5p',
    '37i9dQZF1DWYOkVTse9lln',
    '37i9dQZF1DX0qVgUFKIZBO',
    '37i9dQZF1DX2nwuHNKim4S',
    '37i9dQZF1DX5I05jXm1F2M',
    '3thDm8iuyZqJJfKOrkglqe',
    '2WE4CIDzPlvOFlaG2lunze',
  ];

  constructor(
    protected readonly userSettings: UserSettingsService,
    protected readonly cdr: ChangeDetectorRef,
    protected readonly spotifyPlaylistService: SpotifyPlaylistDataService,
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
        this.spotifyPlaylistService.getPlaylist(playlistUrl),
      ),
    ]);
  }
}
