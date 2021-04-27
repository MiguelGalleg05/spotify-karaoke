import { Pipe, PipeTransform } from '@angular/core';

import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';

@Pipe({
  name: 'trackTime',
})
export class TrackTime implements PipeTransform {
  transform(time_s: number, milliseconds: boolean): unknown {
    if (isNaN(+time_s)) {
      return time_s;
    }
    if (milliseconds) {
      time_s /= 1000;
    }
    return TrackHelper.time(time_s);
  }
}
