import {Component, EventEmitter, Output} from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-music-fundamental',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './music-fundamental.component.html',
  styleUrl: './music-fundamental.component.css'
})
export class MusicFundamentalComponent {
  @Output() back = new EventEmitter<void>();
  active = 1;
}
