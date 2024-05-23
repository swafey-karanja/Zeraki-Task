import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableVisualComponent } from './timetable-visual.component';

describe('TimetableVisualComponent', () => {
  let component: TimetableVisualComponent;
  let fixture: ComponentFixture<TimetableVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimetableVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimetableVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
