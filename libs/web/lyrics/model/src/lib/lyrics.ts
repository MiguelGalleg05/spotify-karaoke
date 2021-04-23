export interface Lyrics {
  artist: string;
  title: string;
  album: string;
  offset: number;
  script: LyricsScript[];
}

export interface LyricsScript {
  text: string;
  start: number;
}

interface LCR {
  ar: string;
  ti: string;
  al: string;
  offset: number;
}

export class LyricsParser {
  static readonly EOL = '\r\n';

  static readonly timeStart = /\[(\d*:\d*\.?\d*)\]/; // i.g [00:10.55]
  static readonly timeStartValue = /\[(\d*:\d*\.?\d*)\](.*)/; // i.g [00:10.55]
  static readonly scriptText = /(.*)/; // Havana ooh na-na (ayy)
  static readonly scriptTextValue = /.*\](.*)/; // Havana ooh na-na (ayy)
  static readonly startAndText = new RegExp(
    LyricsParser.timeStart.source + LyricsParser.scriptText.source
  );

  static lrcParser(data: string): Lyrics {
    // split a long stirng into lines by system's end-of-line marker line \r\n on Windows
    // or \n on POSIX
    let lines = data.split(LyricsParser.EOL);

    const infos = [];
    let scripts: LyricsScript[] = [];
    const result = {} as LCR;

    for (let i = 0; LyricsParser.startAndText.test(lines[i]) === false; i++) {
      infos.push(lines[i]);
    }

    infos.reduce((result, info) => {
      const [key, value] = this.extractInfo(info);
      result[key] = value;
      return result;
    }, result);

    lines.splice(0, infos.length); // remove all info lines
    lines = lines.filter((line) => LyricsParser.startAndText.test(line));

    lines.forEach((line) => {
      const text = this.getTextFromLine(line);
      this.getTimeFromLine(line).forEach((startTime) => {
        scripts.push({
          start: startTime,
          text,
        });
      });
    });

    scripts = scripts.sort((a, b) => a.start - b.start);

    return {
      album: result.al || '',
      artist: result.al || '',
      title: result.ti || '',
      script: scripts,
      offset: result.offset || 0,
    };
  }

  protected static getTimeFromLine(line: string): number[] {
    const times: number[] = [];
    let time: string;
    do {
      [, time, line] = LyricsParser.timeStartValue.exec(line);
      times.push(this.convertTime(time));
    } while (LyricsParser.timeStart.test(line));
    return times;
  }

  protected static getTextFromLine(line: string): string {
    const text = LyricsParser.scriptTextValue.exec(line)[1];
    return text === '' ? '---' : text;
  }

  /**
   *
   * @param {string} data
   * @example [length: 03:36]
   * @return {<Array>{string}} ['length', '03:06']
   */

  protected static extractInfo(data) {
    const info = data.trim().slice(1, -1); // remove brackets: length: 03:06
    return info.split(':');
  }

  // convert time string to seconds
  // i.g: [01:09.10] -> 69.10
  protected static convertTime(string) {
    string = string.split(':');
    const minutes = parseInt(string[0], 10);
    const seconds = parseFloat(string[1]);
    if (minutes > 0) {
      const sc = minutes * 60 + seconds;
      return parseFloat(sc.toFixed(2));
    }
    return seconds;
  }
}
