import { NgModule } from '@angular/core';
import { NgxSplitButtonComponent } from './ngx-split-button.component';
import {CommonModule} from '@angular/common';
import { NgxDropdownItemsDirective } from './directives/ngx-dropdown-items.directive';
import { NgxSplitButtonDirective } from './directives/ngx-split-button.directive';
import { NgxDropdownButtonDirective } from './directives/ngx-dropdown-button.directive';



@NgModule({
  declarations: [
    NgxSplitButtonComponent,
    NgxDropdownItemsDirective,
    NgxSplitButtonDirective,
    NgxDropdownButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [
    NgxSplitButtonComponent,
    NgxDropdownItemsDirective,
    NgxSplitButtonDirective,
    NgxDropdownButtonDirective
  ]
})
export class NgxSplitButtonModule { }
