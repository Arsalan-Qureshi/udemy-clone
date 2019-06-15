import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialSectionComponent } from './tutorial-section.component';

describe('TutorialSectionComponent', () => {
  let component: TutorialSectionComponent;
  let fixture: ComponentFixture<TutorialSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
