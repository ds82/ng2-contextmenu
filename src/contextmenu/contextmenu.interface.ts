export interface ContextmenuComponent {
  id: string;
  show(x: number, y: number): void;
  hide(): void;
}