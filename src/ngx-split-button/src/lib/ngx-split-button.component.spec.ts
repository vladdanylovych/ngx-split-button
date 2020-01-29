import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { NgxSplitButtonComponent } from './ngx-split-button.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('NgxSplitButtonComponent', () => {

  let component: NgxSplitButtonComponent;
  let fixture: ComponentFixture<NgxSplitButtonComponent>;

  let splitBtn: DebugElement;
  let toggleBtn: DebugElement;
  let dropdownMenu: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSplitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSplitButtonComponent);
    component = fixture.componentInstance;

    dropdownMenu = fixture.debugElement.query(By.css('.ngx-dropdown-menu'));
    toggleBtn = fixture.debugElement.query(By.css('.ngx-toggle-btn'));
    splitBtn = fixture.debugElement.queryAll(By.css('.ngx-btn'))[0];

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });


  it('should hide dropdown on init', () => {
    expect(fixture.componentInstance.dropdownMenuOpened).toBe(false);
    expect(dropdownMenu.classes['show']).toBe(false);
  });


  it('should display dropdown on toggleBtn click', () => {

    toggleBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(fixture.componentInstance.dropdownMenuOpened).toBe(true);
    expect(dropdownMenu.classes['show']).toBe(true);
  });


  it('should toggle dropdown state', () => {

    // open dropdown
    toggleBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(fixture.componentInstance.dropdownMenuOpened).toBe(true);
    expect(dropdownMenu.classes['show']).toBe(true);

    // close dropdown
    toggleBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(fixture.componentInstance.dropdownMenuOpened).toBe(false);
    expect(dropdownMenu.classes['show']).toBe(false);
  });

  it('should close dropdown if clicked not toggleBtn', () => {

    // open dropdown
    toggleBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(fixture.componentInstance.dropdownMenuOpened).toBe(true);
    expect(dropdownMenu.classes['show']).toBe(true);

    // close dropdown as clicked not toggleBtn
    splitBtn.nativeElement.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.dropdownMenuOpened).toBe(false);
    expect(dropdownMenu.classes['show']).toBe(false);
  });

  it('should close dropdown if clicked outside the component', () => {

    // open dropdown
    toggleBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(fixture.componentInstance.dropdownMenuOpened).toBe(true);
    expect(dropdownMenu.classes['show']).toBe(true);

    // close dropdown as clicked outside toggle button
    document.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(fixture.componentInstance.dropdownMenuOpened).toBe(false);
    expect(dropdownMenu.classes['show']).toBe(false);
  });

});
