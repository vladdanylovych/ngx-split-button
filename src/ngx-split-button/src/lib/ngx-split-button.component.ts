import {
  Component,
  ContentChild, EventEmitter,
  HostListener,
  Input,
  OnInit, Output,
  TemplateRef, ViewChild
} from '@angular/core';
import {NgxDropdownItemsDirective} from './directives/ngx-dropdown-items.directive';
import {NgxToggleIconDirective} from './directives/ngx-toggle-icon.directive';
import {NgxSplitButtonDirective} from './directives/ngx-split-button.directive';

@Component({
  selector: 'ngx-split-button',
  templateUrl: './ngx-split-button.component.html',
  styleUrls: ['./ngx-split-button.component.scss'],
  host: {
    class: 'ngx-split-button'
  }
})
export class NgxSplitButtonComponent implements OnInit {

  @Output() clickAction = new EventEmitter();

  @Input() name = 'Split Button';
  @Input() alignDropdownRight = false;

  @ContentChild(NgxSplitButtonDirective, { static: true, read: TemplateRef }) splitButtonTpl: TemplateRef<any>;
  @ContentChild(NgxToggleIconDirective, { static: true, read: TemplateRef }) toggleIconTpl: TemplateRef<any>;
  @ContentChild(NgxDropdownItemsDirective, { static: true, read: TemplateRef }) dropdownItemsTpl: TemplateRef<any>;

  @ViewChild('toggleBtn', {static: false}) toggleBtn;

  dropdownMenuOpened = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdownMenu() {
    this.dropdownMenuOpened = !this.dropdownMenuOpened;
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event) {
    // clicked outside toggle Button
    if (!(this.toggleBtn.nativeElement as HTMLElement).contains(event.target) && this.dropdownMenuOpened) {
      this.closeDropdownMenu();
    }
  }

  private closeDropdownMenu() {
    this.dropdownMenuOpened = false;
  }

}
