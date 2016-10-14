import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ContextmenuModule } from '../contextmenu/contextmenu.module';

@NgModule({
  imports: [
    BrowserModule,
    ContextmenuModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
