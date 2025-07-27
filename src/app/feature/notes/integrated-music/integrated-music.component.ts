import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-integrated-music',
  standalone: true,
  imports: [],
  templateUrl: './integrated-music.component.html',
  styleUrl: './integrated-music.component.css'
})
export class IntegratedMusicComponent {
  @Output() back = new EventEmitter<void>();

}
