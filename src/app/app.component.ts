import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FractionalPartPipe} from './fractional-part.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FractionalPartPipe]
})
export class AppComponent {
  month = 22;
  collectionsOfForms = new FormArray([
    new FormGroup({
      name: new FormControl(''),
      price: new FormControl('')
    })
  ]);
  addForm() {
    const form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl('')
    });
    this.collectionsOfForms.push(form);
}
}
