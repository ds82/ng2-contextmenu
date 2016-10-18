import { ElementRef, Renderer } from '@angular/core';
export declare class ContextmenuComponent {
    private element;
    private renderer;
    id: string;
    context: any;
    isVisible: boolean;
    constructor(element: ElementRef, renderer: Renderer);
    show(x: number, y: number): void;
    hide(): void;
    setContext(context: any): void;
}
