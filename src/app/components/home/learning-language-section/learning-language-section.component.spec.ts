import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningLanguageSectionComponent } from './learning-language-section.component';

describe('LearningLanguageSectionComponent', () => {
  let component: LearningLanguageSectionComponent;
  let fixture: ComponentFixture<LearningLanguageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningLanguageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningLanguageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
