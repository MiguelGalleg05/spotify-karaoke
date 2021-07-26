import { isDevMode } from '@angular/core';

export class ImageHelper {
  static getImageUrl(
    images: SpotifyApi.ImageObject[] = [],
    size: number = 300,
  ) {
    if (images.length < 1) {
      return this.getDefaultImage();
    }

    interface RatedImages {
      url: string;
      difference: number;
    }

    const images_rated = images.map((image): RatedImages => {
      return { url: image.url, difference: Math.abs(image.width - size) };
    });
    const images_sorted = images_rated.sort(
      (a, b) => a.difference - b.difference,
    );
    return images_sorted[0].url;
  }

  static getDefaultImage(): string {
    return isDevMode() ? '/assets/logo_1x1.png' : '/en/assets/logo_1x1.png';
  }

  static getDefaultImageObjects(): SpotifyApi.ImageObject[] {
    return [
      {
        url: this.getDefaultImage(),
        width: 3000,
      },
    ];
  }

  static getImage300Url(images: SpotifyApi.ImageObject[] = []): string {
    return images ? this.getImageUrl(images, 300) : this.getDefaultImage();
  }

  static getImage64Url(images: SpotifyApi.ImageObject[] = []): string {
    return images ? this.getImageUrl(images, 64) : this.getDefaultImage();
  }

  static getImagesSet(images: SpotifyApi.ImageObject[] = []): string {
    const transformImages =
      images && images.length > 0 ? images : this.getDefaultImageObjects();
    return [
      ...transformImages.map((image) => `${image.url} ${image.width || 100}w`),
    ].join(', ');
  }
}
