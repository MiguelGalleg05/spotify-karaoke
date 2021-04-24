/// <reference types="spotify-web-playback-sdk" />
import { Component, Input } from '@angular/core';

@Component({
  selector: 'artur-ba-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent {
  @Input() songs: Spotify.Track[];
  @Input() currentSongURI: string;
}
