import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {ListMusicNotesComponent} from "./list-music-notes/list-music-notes.component";
import {ListArchitectureNotesComponent} from "./list-architecture-notes/list-architecture-notes.component";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [MatTabsModule, ListMusicNotesComponent, ListArchitectureNotesComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

}
