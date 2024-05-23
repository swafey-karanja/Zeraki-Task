import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFinancesComponent } from './signup-finances.component';

describe('SignupFinancesComponent', () => {
  let component: SignupFinancesComponent;
  let fixture: ComponentFixture<SignupFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupFinancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
