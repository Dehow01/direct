import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fractionalPart'
})
export class FractionalPartPipe implements PipeTransform {

  transform(value: number | string, ...args: any[]): any {
    let remnant: number;
    let num = +(value.toString().replace(/\s+/g, ''));

    if (this.isFloat(num)) {
      remnant = +(num % 1).toFixed(2);
      num = +num.toFixed(0);
    }

    if (!Number.isInteger(num)) { return value; }

    const outputRemnant = (remnant) ? remnant.toString().slice(1, ) : '';

    return (num
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      + outputRemnant
    );
  }

  isFloat(val: number): boolean {
    return ((val === Number(val)) && ((val % 1) !== 0));
  }
}
