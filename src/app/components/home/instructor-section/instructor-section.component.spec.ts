import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSectionComponent } from './instructor-section.component';

describe('InstructorSectionComponent', () => {
  let component: InstructorSectionComponent;
  let fixture: ComponentFixture<InstructorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
