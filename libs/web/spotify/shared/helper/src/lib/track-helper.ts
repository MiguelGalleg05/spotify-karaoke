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
}
