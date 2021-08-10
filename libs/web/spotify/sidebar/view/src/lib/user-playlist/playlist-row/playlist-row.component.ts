import { Component, Input } from '@angular/core';

@Component({
  selector: 'artur-ba-playlist-row',
  templateUrl: './playlist-row.component.html',
  styleUrls: ['./playlist-row.component.scss'],
})
export class PlaylistRowComponent {
  @Input() playlist: SpotifyApi.PlaylistObjectSimplified;
}
