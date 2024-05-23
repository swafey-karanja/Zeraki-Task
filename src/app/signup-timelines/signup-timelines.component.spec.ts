import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTimelinesComponent } from './signup-timelines.component';

describe('SignupTimelinesComponent', () => {
  let component: SignupTimelinesComponent;
  let fixture: ComponentFixture<SignupTimelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupTimelinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
