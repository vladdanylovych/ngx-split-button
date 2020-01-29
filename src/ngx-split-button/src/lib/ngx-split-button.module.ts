import { NgModule } from '@angular/core';
import { NgxSplitButtonComponent } from './ngx-split-button.component';
import {CommonModule} from '@angular/common';
import { NgxDropdownItemsDirective } from './directives/ngx-dropdown-items.directive';
import { NgxToggleIconDirective } from './directives/ngx-toggle-icon.directive';
import {NgxSplitButtonDirective} from './directives/ngx-split-button.directive';



@NgModule({
  declarations: [
    NgxSplitButtonComponent,
    NgxDropdownItemsDirective,
    NgxSplitButtonDirective,
    NgxToggleIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxSplitButtonComponent,
    NgxDropdownItemsDirective,
    NgxSplitButtonDirective,
    NgxToggleIconDirective
  ]
})
export class NgxSplitButtonModule { }
