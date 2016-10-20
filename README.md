# ng2-contextmenu [![npm Version](https://img.shields.io/npm/v/ng2-contextmenu.svg)](https://www.npmjs.com/package/ng2-contextmenu) [![Build Status](https://travis-ci.org/ds82/ng2-contextmenu.svg?branch=master)](https://travis-ci.org/ds82/ng2-contextmenu)

> Contextmenu module for angular2

**[Plunkr Demo](http://plnkr.co/edit/vFzD58CDMhs6bggH168V?p=preview)**

## Usage

### Install

```
npm i --save ng2-contextmenu
```

### Load module

```
// ...
import { ContextmenuModule } from 'ng2-contextmenu';

// ...
@NgModule({
  imports:      [ BrowserModule, ContextmenuModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { /* ... */ }
```

### Use in your Template

```
<contextmenu #contextmenu>
  <div class="dropdown open">
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">{{contextmenu.get('item.id')}} -> {{contextmenu.get('item.label')}}</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</contextmenu>

<ul class="list-group">
  <li class="list-group-item"
    [contextmenu]="[contextmenu, {item: item}]"
    *ngFor="let item of list; let i = index;" class="list-group-item"
  >
    {{item.label}} ({{item.id}})
  </li>
</ul>
```

### What you must know

* 👷 The module is not feature complete -> still work in progress!
* ⚡ The Module has no dependency on bootstrap or jquery (the example uses bootstrap styles!)
* 🎱 You can use multiple contextmenu's  in the same template; just reference the menu you want to use in the directive:

```
<contextmenu #menu1>
<!-- ... -->
</contextmenu>

<!-- ... -->
<div [contextmenu]="[menu1, {}]"></div>
<!-- ... -->

```