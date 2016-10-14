import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[contextmenuId]' })
export class ContextmenuDirective {
    constructor(el: ElementRef, renderer: Renderer) {
      el.nativeElement.addEventListener('click', this.onClick);
    }

    onClick() {
      alert('clicked!');
    }
}
