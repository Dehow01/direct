import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fractionalPart'
})
export class FractionalPartPipe implements PipeTransform {

  transform(value: number | string, ...args: any[]): any {
    console.log(value);
    const condition = value.trim
    if (!Number.isInteger(+value)) { return null; }
    return (value
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    );
  }

}
