import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HighlighttextComponent } from './highlighttext/highlighttext.component';
import { CodeBlocksComponent } from './code-blocks/code-blocks.component';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, HighlighttextComponent,CodeBlocksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  text: string = "Coding Skills "
}
