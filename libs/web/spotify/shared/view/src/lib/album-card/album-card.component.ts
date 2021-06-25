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

  ngOnInit(): void {
    this.imageUrl = this.getAlbumImage();
    this.title = this.album.name;
    this.subtitle = this.album.artists.map((artist) => artist.name).join(', ');
    this.redirectUrl = `album/${UriDataHelper.getClearUri(this.album.uri)}`;
  }

  protected getAlbumImage(): string {
    return TrackHelper.getImage300Url(this.album);
  }
}
