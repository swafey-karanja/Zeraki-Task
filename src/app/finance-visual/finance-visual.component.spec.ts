import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceVisualComponent } from './finance-visual.component';

describe('FinanceVisualComponent', () => {
  let component: FinanceVisualComponent;
  let fixture: ComponentFixture<FinanceVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinanceVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
