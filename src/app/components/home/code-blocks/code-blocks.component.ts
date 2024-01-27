import { Component, Input, input } from '@angular/core';
import { HighlighttextComponent } from '../highlighttext/highlighttext.component';

@Component({
  selector: 'app-code-blocks',
  standalone: true,
  imports: [HighlighttextComponent],
  templateUrl: './code-blocks.component.html',
  styleUrl: './code-blocks.component.scss'
})
export class CodeBlocksComponent {

}
