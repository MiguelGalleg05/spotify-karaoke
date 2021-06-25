import { Pipe, PipeTransform } from '@angular/core';
import { UriDataHelper } from '@artur-ba/web/spotify/shared/helper';

@Pipe({
  name: 'clearUriData',
})
export class ClearUriDataPipe implements PipeTransform {
  transform(uri: string): string {
    return UriDataHelper.getClearUri(uri);
  }
}
