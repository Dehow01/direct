import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FractionalPartPipe } from './fractional-part.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomControlComponent } from './custom-control/custom-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FractionalPartPipe,
    CustomControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
