import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.scss'
})
export class TimelineSectionComponent {
  timeLines = [
    {
      Logo: "assets/TimeLineLogo/Logo1.svg",
      heading: "Leadership",
      description: "Fully committed to the success company"
    },
    {
      Logo: "assets/TimeLineLogo/Logo2.svg",
      heading: "Responsibility",
      description: "Students will always be our top priority"
    },
    {
      Logo: "assets/TimeLineLogo/Logo3.svg",
      heading: "Flexibility",
      description: "The ability to switch is an important skills"
    },
    {
      Logo: "assets/TimeLineLogo/Logo4.svg",
      heading: "Solve the problem",
      description: "Code your way to a solution"
    },
  ]
}
