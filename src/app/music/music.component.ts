import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {ListMusicNotesComponent} from "./list-music-notes/list-music-notes.component";

@Component({
  selector: 'ap-music',
  standalone: true,
    imports: [MatTabsModule, ListMusicNotesComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

}
