import { NgModule, ModuleWithProviders } from '@angular/core';
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
  providers: [
  ],
  exports: [
    ContextmenuDirective,
    ContextmenuComponent
  ]
})
export class ContextmenuModule {
  constructor() {}

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ContextmenuModule
    };
  }


}
