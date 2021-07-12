import { Component, Input, OnInit } from '@angular/core';

import {
  TrackHelper,
  UriDataHelper,
} from '@artur-ba/web/spotify/shared/helper';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'artur-ba-album-card',
  templateUrl: '../card/card.component.html',
  styleUrls: ['../card/card.component.scss'],
})
export class AlbumCardComponent extends CardComponent implements OnInit {
  @Input() album: SpotifyApi.AlbumObjectFull;

  readonly cardImageAlt = $localize`:album-card.image-alt:Card image`;

  ngOnInit(): void {
    this.imageUrl = this.getAlbumImage();
    this.title = this.album?.name;
    this.subtitle = this.getAlbumReleaseYear();
    this.redirectUrl = `album/${UriDataHelper.getClearUri(this.album?.uri)}`;
  }

  protected getAlbumReleaseYear(): string {
    return new Date(this.album?.release_date).getFullYear().toString();
  }

  protected getAlbumImage(): string {
    return TrackHelper.getImage300Url(this.album);
  }
}
