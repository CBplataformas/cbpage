import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ap-inventory',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {

  searchText: string = '';
  libros: any[] = [];
  librosFiltrados: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('data/libros.json')
        .subscribe(data => {
          this.libros = data;
          this.librosFiltrados = [...this.libros];
        });
  }
  filtrarLibros() {
    const texto = this.searchText.toLowerCase();
    this.librosFiltrados = this.libros.filter(libro =>
        libro.nombre.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto)
    );
  }



}
