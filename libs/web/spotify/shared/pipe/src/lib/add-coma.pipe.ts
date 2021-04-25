import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addComa',
})
export class AddComaPipe implements PipeTransform {
  transform(value: string, addComa: boolean): string {
    return addComa ? value + ', ' : value;
  }
}
