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
  books: any[] = [];
  jsonBooks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('data/books.json')
        .subscribe(data => {
          this.books = data;
          this.jsonBooks = this.shuffleArray([...this.books]);
        });
  }
  filterbooks() {
    const text = this.searchText.toLowerCase();
    this.jsonBooks = this.books.filter(book =>
        book.name.toLowerCase().includes(text) ||
        book.author.toLowerCase().includes(text) ||
        book.subject.toLowerCase().includes(text)
    );
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }




}
