import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  month = 22;
  collectionsOfForms = new FormArray([
    new FormGroup({
      name: new FormControl(''),
      price: new FormControl('')
    })
  ]);
  constructor() {
  }
  addForm() {
    const form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl('')
    });
    this.collectionsOfForms.push(form);
    console.log(this.collectionsOfForms.value);
    console.log(this.parseNumber('333 456.23'));
  }
  parseNumber(val) {
    const value = +(val.toString().replace(/\s+/g, ''));
    // if (!this.isFloat(value)) { return value; }
    const remnant = (value % 1).toFixed(2).slice(1);
    console.log(value);
  }
}
