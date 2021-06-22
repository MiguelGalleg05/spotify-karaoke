import { Lyrics, LyricsParser } from './lyrics';

import {
  lyricsAlbum,
  lyricsArtist,
  lyricsElvis,
  lyricsOffset,
  lyricsTextMultiple,
  lyricsTextSingle,
  lyricsTitle,
} from '@artur-ba/shared/test-helpers';

describe('Lyrics', () => {
  let lyrics: Lyrics;

  beforeAll(() => {
    lyrics = LyricsParser.lrcParser(lyricsElvis);
  });
  it('should parse a lyrics from text', () => {
    expect(lyrics).toBeTruthy();
  });

  it('should match the song data with the tags in text', () => {
    expect(lyrics.album).toEqual(lyricsAlbum);
    expect(lyrics.artist).toEqual(lyricsArtist);
    expect(lyrics.title).toEqual(lyricsTitle);
    expect(lyrics.offset).toEqual(lyricsOffset);
  });

  it('should have one script with text one', () => {
    const matchingScript = lyrics.script.filter(
      (s) => s.text === lyricsTextSingle
    );
    expect(matchingScript).toHaveLength(1);
  });
  it('should have multiple script with text witch exists multiple times', () => {
    const matchingScripts = lyrics.script.filter(
      (s) => s.text === lyricsTextMultiple
    );
    expect(matchingScripts.length).toBeGreaterThan(2);
  });
});
