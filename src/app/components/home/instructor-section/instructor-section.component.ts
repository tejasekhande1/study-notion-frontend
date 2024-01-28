import { Component } from '@angular/core';
import { HighlighttextComponent } from '../highlighttext/highlighttext.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-instructor-section',
  standalone: true,
  imports: [HighlighttextComponent, MatIconModule],
  templateUrl: './instructor-section.component.html',
  styleUrl: './instructor-section.component.scss'
})
export class InstructorSectionComponent {

}
