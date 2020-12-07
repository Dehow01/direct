import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  }
}
