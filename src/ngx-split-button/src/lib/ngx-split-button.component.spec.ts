import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSplitButtonComponent } from './ngx-split-button.component';

describe('NgxSplitButtonComponent', () => {
  let component: NgxSplitButtonComponent;
  let fixture: ComponentFixture<NgxSplitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSplitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSplitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
