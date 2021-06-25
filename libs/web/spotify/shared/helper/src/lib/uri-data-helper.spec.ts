import { UriDataHelper } from './uri-data-helper';

describe('UriDataHelper', () => {
  it('should clear spotify type uri', () => {
    const uri = 'someURI';
    const spotifyUri = 'spotify:artist:' + uri;
    expect(UriDataHelper.getClearUri(spotifyUri)).toEqual(uri);
  });

  it('should protect the original url spotify type uri', () => {
    const url = 'host/some/url/there/';
    const uri = 'someURI';
    const spotifyUri = 'spotify:artist:' + uri;
    expect(UriDataHelper.getClearUri(url + spotifyUri)).toEqual(url + uri);
  });
});
