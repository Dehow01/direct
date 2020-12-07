import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fractionalPart'
})
export class FractionalPartPipe implements PipeTransform {

  transform(value: number | string, ...args: any[]): any {
    let remnant = '';
    // value = +(value.toString().replace(/\s+/g, ''));
    // if (this.isFloat(value)) {
    //   remnant = (value % 1).toFixed(2).slice(1);
    //   value = value.toFixed(0);
    //   console.log(value, remnant);
    // }
    if (!Number.isInteger(+value)) { return null; }
    return (value
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      + remnant
    );
  }
  // isFraction(num: number): boolean {
  //   return (num ^ 0) !== num;
  // }
  isFloat(val) {
    return ((val === Number(val)) && ((val % 1) !== 0));
  }
  parseNumber(val) {
    const value = +(val.toString().replace(/\s+/g, ''));
    if (!this.isFloat(value)) { return value; }
    const remnant = (value % 1).toFixed(2).slice(1);
  }
}
