import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  SpotifyBrowseService,
  SpotifyPlayerService,
  SpotifyPlaylistDataService,
} from '@artur-ba/web/spotify/shared/service';
import { CardListViewMode } from '@artur-ba/web/spotify/shared/view';
import { UserSettingsService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggleControl = new FormControl(false);
  playlists: SpotifyApi.PlaylistObjectFull[] = [];
  featuredPlaylists: SpotifyApi.PlaylistObjectSimplified[] = [];
  tracks: SpotifyApi.TrackObjectSimplified[] = [];

  readonly CardListViewMode = CardListViewMode;
  readonly singAlongTitle = $localize`:dashboard.sing_along:Sing along`;
  readonly recentlyPlayedTitle = $localize`:dashboard.recently_played:Recently played`;
  featuredPlaylistTitle;

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
    protected readonly spotifyPlayer: SpotifyPlayerService,
    protected readonly spotifyBrowse: SpotifyBrowseService,
  ) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.userSettings.darkMode(darkMode);
    });
    this.initAlbums();
    this.initTracks();
    this.initFeaturedPlaylists();
  }

  protected async initAlbums(): Promise<void> {
    this.playlists = await Promise.all([
      ...this.playlistUrls.map((playlistUrl) =>
        this.spotifyPlaylistService.getPlaylist(playlistUrl),
      ),
    ]);
  }

  protected async initTracks(): Promise<void> {
    const response = await this.spotifyPlayer.recentlyPlayed();
    const tracks = [...response.items.map((t) => t.track)];
    const trackIds = [];
    this.tracks = tracks.filter((t) => {
      if (trackIds.includes(t.id)) {
        return false;
      }
      trackIds.push(t.id);
      return true;
    });
  }

  protected async initFeaturedPlaylists(): Promise<void> {
    const response = await this.spotifyBrowse.getFeaturedPlaylists();
    this.featuredPlaylistTitle =
      response.message ||
      $localize`:dashboard.featured_playlist:Featured playlists`;
    this.featuredPlaylists = response.playlists.items;
  }
}
