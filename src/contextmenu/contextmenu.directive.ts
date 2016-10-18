import {
  Directive,
  ElementRef,
  Input,
  Renderer,
  HostListener
} from '@angular/core';

import { ContextmenuService } from './contextmenu.service';

@Directive({
  selector: '[contextmenu]',
  providers: [ContextmenuService]
})
export class ContextmenuDirective {

  private service: ContextmenuService;

  constructor(el: ElementRef, renderer: Renderer) {
    this.service = ContextmenuService.getInstance();
  }

  @Input('contextmenu') id: string;

  @HostListener('contextmenu', ['$event'])
  onContextmenu(ev: any) {
    console.log(`contextmenu! ${this.id}`)
    this.service.show(this.id, ev.clientX, ev.clientY);
    ev.stopPropagation();
    ev.preventDefault();
  }
}
