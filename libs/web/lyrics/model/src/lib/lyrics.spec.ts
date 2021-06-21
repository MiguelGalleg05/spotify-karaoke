import { Lyrics, LyricsParser } from './lyrics';

const album = 'Elv1s 30 #1 Hits';
const artist = 'Elvis Presley';
const title = 'Jailhouse Rock';
const offset = '500';

const textSingle = 'The prison band was there and they began to wail.';
const textMultiple = "Let's rock, everybody, let's rock.";

export const lyricsElvis =
  '[id:qr_psisaz]\r\n' +
  `[ti:${title}]\r\n` +
  `[ar:${artist}]\r\n` +
  `[al:${album}]\r\n` +
  `[by:van]\r\n` +
  `[offset:${offset}]\r\n` +
  '[00:00.00]Elvis Presley - Jailhouse Rock\r\n' +
  '[00:05.10][00:28.92][00:51.86][01:14.40][01:49.24][02:11.76][02:32.27][02:33.42]\r\n' +
  '[00:07.10]The warden threw a party in the county jail.\r\n' +
  `[00:09.75]${textSingle}\r\n` +
  "[00:12.50]The band was jumpin' and the joint began to swing.\r\n" +
  "[00:15.29]You should've heard those knocked out jailbirds sing.\r\n" +
  `[00:18.01][00:40.78][01:03.59][01:37.76][02:00.67]${textMultiple}\r\n` +
  '[00:23.68][00:46.55][01:09.32][01:43.64][02:06.05]Everybody in the whole cell block\r\n' +
  "[00:26.69][00:49.66][01:12.47][01:46.63][02:09.51]Was dancin' to the Jailhouse Rock.\r\n" +
  '[00:29.76]Spider Murphy played the tenor saxophone,\r\n' +
  "[00:32.47]Little Joe was blowin' on the slide trombone.\r\n" +
  '[00:35.32]The drummer boy from Illinois went crash, boom, bang,\r\n' +
  '[00:38.21]The whole rhythm section was the Purple Gang.\r\n' +
  '[00:52.69]Number forty - seven said to number three:\r\n' +
  '[00:55.16]"You\'re the cutest jailbird I ever did see.\r\n' +
  '[00:58.31]I sure would be delighted with your company,\r\n' +
  '[01:00.92]Come on and do the Jailhouse Rock with me."\r\n' +
  "[01:26.95]The sad sack was a sittin' on a block of stone\r\n" +
  "[01:29.58]Way over in the corner weepin' all alone.\r\n" +
  '[01:32.33]The warden said, "Hey, buddy, don\'t you be no square.\r\n' +
  '[01:35.19]If you can\'t find a partner use a wooden chair."\r\n' +
  '[01:49.65]Shifty Henry said to Bugs, "For Heaven\'s sake,\r\n' +
  "[01:52.29]No one's lookin', nows our chance to make a break.\"\r\n" +
  '[01:55.17]Bugsy turned to Shifty and he said, "Nix nix,\r\n' +
  '[01:57.96]I wanna stick around a while and get my kicks."\r\n' +
  "[02:12.73]Dancin' to the Jailhouse Rock...\r\n" +
  '[02:34.06]END\r\n';

describe('Lyrics', () => {
  let lyrics: Lyrics;

  beforeAll(() => {
    lyrics = LyricsParser.lrcParser(lyricsElvis);
  });
  it('should parse a lyrics from text', () => {
    expect(lyrics).toBeTruthy();
  });

  it('should match the song data with the tags in text', () => {
    expect(lyrics.album).toEqual(album);
    expect(lyrics.artist).toEqual(artist);
    expect(lyrics.title).toEqual(title);
    expect(lyrics.offset).toEqual(offset);
  });

  it('should have one script with text one', () => {
    const matchingScript = lyrics.script.filter((s) => s.text === textSingle);
    expect(matchingScript).toHaveLength(1);
  });
  it('should have multiple script with text witch exists multiple times', () => {
    const matchingScripts = lyrics.script.filter(
      (s) => s.text === textMultiple
    );
    expect(matchingScripts.length).toBeGreaterThan(2);
  });
});
