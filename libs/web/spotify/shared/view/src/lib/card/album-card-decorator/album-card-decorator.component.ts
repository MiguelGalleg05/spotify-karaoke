import { Component, Input, OnInit } from '@angular/core';

import {
  TrackHelper,
  UriDataHelper,
} from '@artur-ba/web/spotify/shared/helper';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'artur-ba-album-card-decorator',
  templateUrl: '../card-decorator/card-decorator.component.html',
  styleUrls: ['../card-decorator/card-decorator.component.scss'],
})
export class AlbumCardDecoratorComponent
  extends CardComponent
  implements OnInit {
  @Input() album: SpotifyApi.AlbumObjectFull;

  ngOnInit(): void {
    this.initWithAlbumValue();
  }

  protected initWithAlbumValue(): void {
    if (!this.album) {
      return;
    }
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
