import { Component, HostListener, Input, ViewChild } from '@angular/core';

import {
  PlayButtonComponent,
  PlayButtonStyle,
} from '../../play/play-button/play-button.component';

import { TrackListColumns } from '../track-list/track-list.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[artur-ba-track-row]',
  templateUrl: './track-row.component.html',
  styleUrls: ['./track-row.component.scss'],
})
export class TrackRowComponent {
  @Input() count: number;
  @Input() track: SpotifyApi.TrackObjectFull;
  @Input() columns: TrackListColumns[];
  @Input() context: SpotifyApi.PlayParameterObject;

  readonly PlayButtonStyle = PlayButtonStyle;

  readonly TrackListColumns = TrackListColumns;

  @ViewChild(PlayButtonComponent) playButtonComponent: PlayButtonComponent;

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    this.playButtonComponent.onPlayClick(null);
  }

  getPlayContext(): SpotifyApi.PlayParameterObject {
    return this.context?.context_uri
      ? this.context
      : {
          context_uri: this.track?.album?.uri,
          offset: { position: this.track?.track_number },
        };
  }
}
