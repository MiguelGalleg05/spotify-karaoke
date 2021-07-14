import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SpotifyDataService } from '@artur-ba/web/spotify/shared/service';
import { UserSettingsService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggleControl = new FormControl(false);
  albums: SpotifyApi.AlbumObjectFull[] = [];

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
    this.albums.push(
      await this.spotifyService.getAlbum('4YzNjecIvmLFEby13NOBmj'),
    );
    this.albums.push(
      await this.spotifyService.getAlbum('3I9Z1nDCL4E0cP62flcbI5'),
    );
  }
}
