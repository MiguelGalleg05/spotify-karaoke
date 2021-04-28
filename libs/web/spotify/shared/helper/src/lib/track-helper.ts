/// <reference types="spotify-web-playback-sdk" />

import { isDevMode } from '@angular/core';

export class TrackHelper {
  static time(seconds: number) {
    const second = Math.floor(seconds % 60);
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const hour = Math.floor(seconds / (60 * 60));
    let ret_str = '';
    if (hour) {
      ret_str += `${hour}:`;
    }
    ret_str += `${minutes}:`;
    if (second < 10) {
      ret_str += '0';
    }
    return ret_str + `${second}`;
  }

  static getImage64Url(track: Spotify.Track): string {
    const img = track?.album.images.filter((image) => image.height == 64);
    if (img && img[0]) {
      return img[0].url;
    }
    return isDevMode() ? '/assets/logo_1x1.png' : '/en/assets/logo_1x1.png';
  }

  static getArtists(track: Spotify.Track): string {
    let artists = '';
    track?.artists.forEach((art) => {
      artists += art.name + ' ';
    });

    return artists;
  }
}
