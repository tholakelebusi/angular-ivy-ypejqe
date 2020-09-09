import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatButtonModule} from '@angular/material/button';


import { DialogComponent } from './dialog/dialog.component';
import { SelectEmpComponent } from './select-emp/select-emp.component';



  



@NgModule({
  imports:      [ BrowserModule, FormsModule,MatButtonModule],
  declarations: [ AppComponent, HelloComponent,  DialogComponent, SelectEmpComponent],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
