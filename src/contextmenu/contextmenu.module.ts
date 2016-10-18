import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ContextmenuComponent } from './contextmenu.interface';
import { ContextmenuComponentImpl } from './contextmenu.component';
import { ContextmenuDirective } from './contextmenu.directive';
import { ContextmenuService } from './contextmenu.service'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ContextmenuDirective,
    ContextmenuComponentImpl
  ],
  bootstrap: [

  ],
  providers: [
    ContextmenuService
  ],
  exports: [
    ContextmenuDirective,
    ContextmenuComponentImpl
  ]
})
export class ContextmenuModule { }
