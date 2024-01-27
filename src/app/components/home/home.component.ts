import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HighlighttextComponent } from './highlighttext/highlighttext.component';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { LearningLanguageSectionComponent } from './learning-language-section/learning-language-section.component';
import { TimelineSectionComponent } from './timeline-section/timeline-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, HighlighttextComponent, TimelineSectionComponent, LearningLanguageSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  text: string = "Coding Skills "
}
