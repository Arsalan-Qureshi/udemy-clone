import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainHeadingComponent } from './first-main-heading.component';

describe('FirstMainHeadingComponent', () => {
  let component: FirstMainHeadingComponent;
  let fixture: ComponentFixture<FirstMainHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMainHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstMainHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
