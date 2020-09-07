import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

    delete(name)
    {
      const index=this.todolist.indexOf(name);
      if(index>-1)
      {
        this.todolist.splice(index,1);
      }
    }



@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloComponent,DialogComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
