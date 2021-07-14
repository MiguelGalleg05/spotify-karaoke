import { Component, Input } from '@angular/core';

import {
  TrackHelper,
  UriDataHelper,
} from '@artur-ba/web/spotify/shared/helper';

import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';

@Component({
  selector: 'artur-ba-playlist-card-decorator',
  templateUrl: '../card-decorator/card-decorator.component.html',
  styleUrls: ['../card-decorator/card-decorator.component.scss'],
})
export class PlaylistCardDecoratorComponent extends CardDecoratorComponent {
  @Input() playlist: SpotifyApi.PlaylistObjectSimplified;

  protected readonly ownerPrefix = $localize`:playlist.ownerPrefix:By `;

  ngOnInit(): void {
    this.initWithPlaylistValue();
  }

  protected initWithPlaylistValue(): void {
    if (!this.playlist) {
      return;
    }

    this.imageUrl = this.getImage();
    this.title = this.playlist.name;
    this.subtitle = `${this.ownerPrefix} <em> ${this.playlist.owner.display_name} </em>`;
    this.redirectUrl = `album/${UriDataHelper.getClearUri(this.playlist.uri)}`;
  }

  protected getImage(): string {
    return TrackHelper.getImage300Url(this.playlist);
  }
}
