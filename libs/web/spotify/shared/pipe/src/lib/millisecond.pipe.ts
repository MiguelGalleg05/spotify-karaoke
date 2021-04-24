import { Pipe, PipeTransform } from '@angular/core';

import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';

@Pipe({
  name: 'trackTime',
})
export class TrackTime implements PipeTransform {
  transform(value: unknown, ..._: unknown[]): unknown {
    if (isNaN(+value)) {
      return value;
    }
    return TrackHelper.time(value as number);
  }
}
