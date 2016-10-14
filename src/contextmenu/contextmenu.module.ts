import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ContextmenuComponent } from './contextmenu.component';
import { ContextmenuDirective } from './contextmenu.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ContextmenuDirective,
    ContextmenuComponent
  ],
  bootstrap: [

  ],
  exports: [
    ContextmenuDirective,
    ContextmenuComponent
  ]
})
export class ContextmenuModule { }
