import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomerChallengeComponent } from './newcomer-challenge.component';

describe('NewcomerChallengeComponent', () => {
  let component: NewcomerChallengeComponent;
  let fixture: ComponentFixture<NewcomerChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcomerChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomerChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
