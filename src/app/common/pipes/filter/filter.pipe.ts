import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value, args) {
    if (!args) {
      return value;
    } else if (value) {
      return value.filter(item => {
        return Object.keys(item).some(key => {
          return (typeof item[key] === 'string' || item[key] instanceof String) &&
            (item[key].indexOf(args) > -1);
        });
      });
    }
  }
}
