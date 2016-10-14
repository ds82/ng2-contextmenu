import {
  Directive,
  Input,
  Renderer,
  HostListener
} from '@angular/core';

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
}
