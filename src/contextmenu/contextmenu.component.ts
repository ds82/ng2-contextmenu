import {
  Component,
  Input,
  ContentChild,
  AfterViewInit,
  ElementRef,
  Renderer
} from '@angular/core';

@Component({
  selector: 'contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css'],
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
    console.log(`show ${this.id}: ${x},${y}`);
  }

  hide() {
    this.isVisible = false;
  }

  setContext(context: any) {
    console.log(`setContext`, context);
    this.context = context;
  }
}
