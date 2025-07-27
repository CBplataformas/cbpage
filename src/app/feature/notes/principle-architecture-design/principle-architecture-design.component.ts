import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-principle-architecture-design',
  standalone: true,
  imports: [],
  templateUrl: './principle-architecture-design.component.html',
  styleUrl: './principle-architecture-design.component.css'
})
export class PrincipleArchitectureDesignComponent {
  @Output() back = new EventEmitter<void>();
}
