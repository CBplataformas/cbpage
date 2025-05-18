import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";

@Component({
  selector: 'ap-music',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

}
