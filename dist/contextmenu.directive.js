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
var ContextmenuDirective = (function () {
    function ContextmenuDirective() {
    }
    ContextmenuDirective.prototype.onContextmenu = function (ev) {
        var _a = this.in, menu = _a[0], context = _a[1];
        menu.setContext(context);
        menu.show(ev.clientX, ev.clientY);
        ev.stopPropagation();
        ev.preventDefault();
    };
    __decorate([
        core_1.Input('contextmenu'), 
        __metadata('design:type', Array)
    ], ContextmenuDirective.prototype, "in", void 0);
    __decorate([
        core_1.HostListener('contextmenu', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ContextmenuDirective.prototype, "onContextmenu", null);
    ContextmenuDirective = __decorate([
        core_1.Directive({
            selector: '[contextmenu]',
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ContextmenuDirective);
    return ContextmenuDirective;
}());
exports.ContextmenuDirective = ContextmenuDirective;
//# sourceMappingURL=contextmenu.directive.js.map