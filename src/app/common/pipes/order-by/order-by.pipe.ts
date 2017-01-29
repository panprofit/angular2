import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {
    if (typeof args[0] === 'undefined') {
      return array;
    }
    const regexp = /^(-?)(.+)/.exec(args);
    const order = !regexp[1];
    const key = regexp[2];
    array.sort((a: any, b: any) => {
      if (a[key] > b[key]) {
        return order ? 1 : -1;
      } else if (a[key] < b[key]) {
        return order ? -1 : 1;
      }
      return 0;
    });

    return array;
  }
}
