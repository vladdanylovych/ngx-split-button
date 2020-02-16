[![npm version](https://badge.fury.io/js/ngx-split-button.svg)](https://badge.fury.io/js/ngx-split-button)
[![Build Status](https://travis-ci.org/vladify/ngx-split-button.svg?branch=master)](https://travis-ci.org/vladify/ngx-split-button)

# NgxSplitButton
Angular split button component

## Installation

```
npm install ngx-split-button
```

Import NgxSplitButtonModule:

```ts
import {NgxSplitButtonModule} from 'ngx-split-button';
// ...

@NgModule({
  imports: [
    NgxSplitButtonModule
    // ...
  ]
  // ...
})
export class AppModule {}
```

## Usage

Left-aligned dropdown:

```angular2html
<ngx-split-button name="Test Button">
  <ng-container *ngxDropdownItems>
    <li><a class="ngx-dropdown-item" href="#">Action 1</a></li>
    <li><a class="ngx-dropdown-item" href="#">Action 2</a></li>
    <li><a class="ngx-dropdown-item" href="#">Action 3</a></li>
    <li><a class="ngx-dropdown-item" href="#">Action 4</a></li>
    <li><a class="ngx-dropdown-item" href="#">Action 5</a></li>
  </ng-container>
</ngx-split-button>
```

Right-aligned dropdown: 

```angular2html
<ngx-split-button [alignDropdownRight]="true">
  <ng-container *ngxSplitButton>
    <button type="button" class="ngx-btn">
      Test Button
    </button>
  </ng-container>
  <ng-container *ngxDropdownItems>
    <li><a class="ngx-dropdown-item" href="#">Example Action 1</a></li>
    <li><a class="ngx-dropdown-item" href="#">Example Action 2</a></li>
    <li><a class="ngx-dropdown-item" href="#">Example Action 3</a></li>
    <li><a class="ngx-dropdown-item" href="#">Example Action 4</a></li>
    <li><a class="ngx-dropdown-item" href="#">Example Action 5</a></li>
  </ng-container>
</ngx-split-button>
```

Custom icon of split button:

```html
<ngx-split-button name="Test Button" (clickAction)="router.navigate(['/home'])">
  <ng-container *ngxToggleIcon>
    <mat-icon svgIcon="my-custom-icon"></mat-icon>
  </ng-container>
  <ng-container *ngxDropdownItems>
    <li><button type="button" class="ngx-dropdown-item">Action 1</button></li>
    <li><button type="button" class="ngx-dropdown-item">Action 2</button></li>
  </ng-container>
</ngx-split-button>
```

## Custom styles

If you are not happy with default styles you can easily override them with increased selector specificity. 

```html
<ngx-split-button class="custom" name="Test Button" (clickAction)="router.navigate(['/home'])">
  <ng-container *ngxToggleIcon>
    <mat-icon svgIcon="my-custom-icon"></mat-icon>
  </ng-container>
  <ng-container *ngxDropdownItems>
    <li><button type="button" class="ngx-dropdown-item">Action 1</button></li>
    <li><button type="button" class="ngx-dropdown-item">Action 2</button></li>
  </ng-container>
</ngx-split-button>
```

```css
.ngx-split-button.custom .ngx-btn-group .ngx-btn {
    font-size: 14px;
 }

.ngx-split-button.custom .ngx-btn-group .ngx-dropdown-item {
    font-family: "Montserrat", sans-serif;
}
```
