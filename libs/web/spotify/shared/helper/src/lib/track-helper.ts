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

  static getImageUrl(
    { images }: { images: SpotifyApi.ImageObject[] } = { images: [] },
    size: number = 300
  ) {
    if (images.length < 1) {
      return this.getDefaultImage();
    }

    interface RatedImages {
      url: string;
      difference: number;
    }

    const images_rated = images.map(
      (image): RatedImages => {
        return { url: image.url, difference: Math.abs(image.height - size) };
      }
    );
    const images_sorted = images_rated.sort(
      (a, b) => a.difference - b.difference
    );
    return images_sorted[0].url;
  }

  protected static getDefaultImage(): string {
    return isDevMode() ? '/assets/logo_1x1.png' : '/en/assets/logo_1x1.png';
  }

  static getImage300Url(
    { images }: { images: SpotifyApi.ImageObject[] } = { images: [] }
  ): string {
    return this.getImageUrl({ images }, 300);
  }

  static getImage64Url(
    { images }: { images: SpotifyApi.ImageObject[] } = { images: [] }
  ): string {
    return this.getImageUrl({ images }, 64);
  }

  static getArtists(track: Spotify.Track): string {
    let artists = '';
    track?.artists.forEach((art) => {
      artists += art.name + ' ';
    });

    return artists;
  }
}
