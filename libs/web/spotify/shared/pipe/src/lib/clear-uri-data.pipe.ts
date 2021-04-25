import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearUriData',
})
export class ClearUriDataPipe implements PipeTransform {
  transform(uri: string): unknown {
    const last_slash: number = uri.lastIndexOf('/');
    let preserve_url = '';
    if (last_slash > 0) {
      preserve_url = uri.substring(0, last_slash + 1);
    }
    const splitted = uri.split(':');
    return preserve_url + splitted[splitted.length - 1];
  }
}
