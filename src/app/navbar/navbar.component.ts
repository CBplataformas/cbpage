import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;

  cerrarMenu() {
    // Solo cerrar si estamos en vista móvil
    if (window.innerWidth < 992) {
      this.isMenuOpen = false;
    }
  }
}
