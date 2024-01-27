import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlighttext',
  standalone: true,
  imports: [],
  templateUrl: './highlighttext.component.html',
  styleUrl: './highlighttext.component.scss'
})
export class HighlighttextComponent {
  @Input() text = ''
}
