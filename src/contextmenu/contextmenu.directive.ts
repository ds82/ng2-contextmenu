import {
  Directive,
  Input,
  Renderer,
  HostListener
} from '@angular/core';

/*global DocumentTouch:false */
declare var DocumentTouch: any;
const isTouch = !!(('ontouchstart' in window) ||
      (window as any).DocumentTouch && document instanceof DocumentTouch);

@Directive({
  selector: '[contextmenu]',
  providers: []
})
export class ContextmenuDirective {

  @Input('contextmenu') in: any[];

  constructor() {}

  @HostListener('contextmenu', ['$event'])
  onContextmenu(ev: any) {
    let [menu, context] = this.in;
    menu.setContext(context);
    menu.show(ev.clientX, ev.clientY);
    ev.stopPropagation();
    ev.preventDefault();
  }

  @HostListener('click', ['$event'])
  onClick(ev: any) {
    if (isTouch) {
      return this.onContextmenu(ev);
    }
  }

}
