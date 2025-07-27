import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-armonia',
  standalone: true,
  imports: [],
  templateUrl: './armonia.component.html',
  styleUrl: './armonia.component.css'
})
export class ArmoniaComponent {
  @Output() back = new EventEmitter<void>();
}
