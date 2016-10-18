import { Component, Input, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { ContextmenuComponent } from './contextmenu.interface';
import { ContextmenuService } from './contextmenu.service';

@Component({
  selector: 'contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css'],
  host: {
    '[class.contextmenu-container]': '1',
    '[class.show]': 'isVisible'
  }
})
export class ContextmenuComponentImpl implements ContextmenuComponent, AfterViewInit {

  private service: ContextmenuService = null;

  isVisible: boolean = false;
  @Input('id') id: string;

  constructor(private element: ElementRef, private renderer: Renderer) {
    this.service = ContextmenuService.getInstance();
  }

  ngAfterViewInit() {
    this.service.register(this);
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
}
