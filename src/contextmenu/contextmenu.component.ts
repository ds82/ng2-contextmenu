import {
  Component,
  Input,
  ElementRef,
  Renderer
} from '@angular/core';

@Component({
  selector: 'contextmenu',
  template: `
    <div class="contextmenu">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `:host(.contextmenu-container) {
        display: none;
        position: absolute;
    }`,
    `:host(.contextmenu-container.show) {
        display: block;
      }
    `
  ],
  host: {
    '[class.contextmenu-container]': '1',
    '[class.show]': 'isVisible'
  }
})
export class ContextmenuComponent {

  @Input('id') id: string;

  context: any = {};
  isVisible: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  show(x: number, y: number) {
    this.renderer.setElementStyle(this.element.nativeElement, 'left', `${x}px`);
    this.renderer.setElementStyle(this.element.nativeElement, 'top', `${y}px`);
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  setContext(context: any) {
    this.context = context;
  }
}
