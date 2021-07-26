import { ImageHelper } from './image-helper';

describe('ImageHelper', () => {
  it('should create an instance', () => {
    expect(new ImageHelper()).toBeTruthy();
  });

  describe('image set', () => {
    it('should return a default src set if no images are null', () => {
      expect(ImageHelper.getImagesSet(null)).toEqual(
        '/assets/logo_1x1.png 3000w',
      );
    });
    it('should return a default src set if no images provided', () => {
      expect(ImageHelper.getImagesSet()).toEqual('/assets/logo_1x1.png 3000w');
    });
    it('should return a src set for provided images', () => {
      const images: SpotifyApi.ImageObject[] = [
        {
          url: 'someUrl',
          width: 200,
        },
      ];

      expect(ImageHelper.getImagesSet(images)).toEqual(
        `${images[0].url} ${images[0].width}w`,
      );
    });
    it('should return a src set for provided images with default width', () => {
      const images: SpotifyApi.ImageObject[] = [
        {
          url: 'someUrl',
        },
      ];

      expect(ImageHelper.getImagesSet(images)).toEqual(`${images[0].url} 100w`);
    });
  });

  describe('get image', () => {
    let images: SpotifyApi.ImageObject[];
    const sImage = (w: number): SpotifyApi.ImageObject => {
      return {
        url: `url_${w}`,
        width: w,
      };
    };

    beforeAll(() => {
      images = [sImage(64), sImage(100), sImage(300), sImage(700), sImage(900)];
    });
    it('should select a 300w image from a set', () => {
      expect(ImageHelper.getImage300Url(images)).toEqual(sImage(300).url);
    });
    it('should select a 64w image from a set', () => {
      expect(ImageHelper.getImage64Url(images)).toEqual(sImage(64).url);
    });
    it('should select closest size from a set', () => {
      expect(ImageHelper.getImageUrl(images, 710)).toEqual(sImage(700).url);
    });
  });
});
