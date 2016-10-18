import { Injectable } from '@angular/core';
import { ContextmenuComponent } from './contextmenu.interface';

@Injectable()
export class ContextmenuService {

  static instance: ContextmenuService = null;
  private link: any = {};

  constructor() { }

  static getInstance(): ContextmenuService {
    if (ContextmenuService.instance === null) {
      ContextmenuService.instance = new ContextmenuService();
    }
    return ContextmenuService.instance;
  }

  register(menu: ContextmenuComponent) {
    console.log(`register: ${menu.id}`)
    this.link[menu.id] = menu;
  }

  show(id: string, x: number, y: number) {
    console.log(`show: ${id} -> ${this.link[id]}`);
    if (this.link[id]) {
      this.link[id].show(x, y);
    }
  }

  get(id: string) {
    return this.link[id];
  }
}