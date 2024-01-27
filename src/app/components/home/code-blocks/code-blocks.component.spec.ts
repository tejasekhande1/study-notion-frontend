import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlocksComponent } from './code-blocks.component';

describe('CodeBlocksComponent', () => {
  let component: CodeBlocksComponent;
  let fixture: ComponentFixture<CodeBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBlocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
