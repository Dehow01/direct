import {Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomControlComponent),
    multi: true
  }]
})
export class CustomControlComponent implements ControlValueAccessor {
  years = 0;
  month = 0;
  @Input()
  _value = 0;

  get value() {
    return this._value;
  }
  set value(val: number) {
    this._value = val;
    this.years = Math.floor(val / 12);
    this.month = val - 12 * this.years;
    this.propagateChange(this._value);
  }
  propagateChange(_: any) {
  }
  writeValue(val: any) {
    if (val !== undefined) {
      this.value = val;
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any) {
  }

}
