"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ContextmenuComponent = (function () {
    function ContextmenuComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.context = {};
        this.isVisible = false;
    }
    ContextmenuComponent.prototype.show = function (x, y) {
        this.renderer.setElementStyle(this.element.nativeElement, 'left', x + "px");
        this.renderer.setElementStyle(this.element.nativeElement, 'top', y + "px");
        this.isVisible = true;
        console.log("show " + this.id + ": " + x + "," + y);
    };
    ContextmenuComponent.prototype.hide = function () {
        this.isVisible = false;
    };
    ContextmenuComponent.prototype.setContext = function (context) {
        console.log("setContext", context);
        this.context = context;
    };
    __decorate([
        core_1.Input('id'), 
        __metadata('design:type', String)
    ], ContextmenuComponent.prototype, "id", void 0);
    ContextmenuComponent = __decorate([
        core_1.Component({
            selector: 'contextmenu',
            template: "\n    <div class=\"contextmenu\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: [
                ":host(.contextmenu-container) {\n        display: none;\n        position: absolute;\n    }",
                ":host(.contextmenu-container.show) {\n        display: block;\n      }\n    "
            ],
            host: {
                '[class.contextmenu-container]': '1',
                '[class.show]': 'isVisible'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ContextmenuComponent);
    return ContextmenuComponent;
}());
exports.ContextmenuComponent = ContextmenuComponent;
//# sourceMappingURL=contextmenu.component.js.map