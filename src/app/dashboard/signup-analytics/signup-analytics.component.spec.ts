import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAnalyticsComponent } from './signup-analytics.component';

describe('SignupAnalyticsComponent', () => {
  let component: SignupAnalyticsComponent;
  let fixture: ComponentFixture<SignupAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupAnalyticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
