import {
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';
import {NgxSplitButtonDirective} from './directives/ngx-split-button.directive';
import {NgxDropdownButtonDirective} from './directives/ngx-dropdown-button.directive';
import {NgxDropdownItemsDirective} from './directives/ngx-dropdown-items.directive';

@Component({
  selector: 'ngx-split-button',
  templateUrl: './ngx-split-button.component.html',
  styleUrls: ['./ngx-split-button.component.scss'],
  host: {
    class: 'ngx-split-button'
  }
})
export class NgxSplitButtonComponent implements OnInit {

  @ContentChild(NgxSplitButtonDirective, { static: true, read: TemplateRef }) splitButtonTpl: TemplateRef<any>;
  @ContentChild(NgxDropdownButtonDirective, { static: true, read: TemplateRef }) dropdownButtonTpl: TemplateRef<any>;
  @ContentChild(NgxDropdownItemsDirective, { static: true, read: TemplateRef }) dropdownItemsTpl: TemplateRef<any>;

  dropdownMenuOpened = false;

  @Input() alignDropdownRight = false;

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit() {
  }

  toggleDropdownMenu() {
    this.dropdownMenuOpened = !this.dropdownMenuOpened;
  }

  getDropdownButtonTplContext(): object {
    return { $implicit: () => this.toggleDropdownMenu() };
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event) {
    // clicked outside
    if (!this.eRef.nativeElement.contains(event.target) && this.dropdownMenuOpened) {
      this.closeDropdownMenu();
    }
  }

  private closeDropdownMenu() {
    this.dropdownMenuOpened = false;
  }

}
