import { Component } from '@angular/core';
import {Card} from "../card.model";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ArmoniaComponent} from "../armonia/armonia.component";
import {MusicFundamentalComponent} from "../music-fundamental/music-fundamental.component";

@Component({
  selector: 'app-list-music-notes',
  standalone: true,
  imports: [
    CommonModule,
    ArmoniaComponent,
    MusicFundamentalComponent
  ],
  templateUrl: './list-music-notes.component.html',
  styleUrl: './list-music-notes.component.css'
})
export class ListMusicNotesComponent {
  selectedId: string | null = null;
  cards: Card[] = [
    { id: '1',title: 'Harmony I', description: 'In this notes, you are going to find basic information about harmony'},
    { id: '2',title: 'Music Fundamental', description: 'In this notes, you are going to found information about Music fundamental'},
    { id: '3',title: 'Card 3', description: 'Descripción de la card 3' },
    { id: '4',title: 'Card 4', description: 'Descripción de la card 4' },
    { id: '5',title: 'Card 5', description: 'Descripción de la card 5' },
    { id: '6',title: 'Card 6', description: 'Descripción de la card 6' },
    { id: '7',title: 'Card 7', description: 'Descripción de la card 7'},
    { id: '8',title: 'Card 8', description: 'Descripción de la card 8' },
    { id: '9',title: 'Card 9', description: 'Descripción de la card 9' },
  ];

  selectCard(id: string) {
    this.selectedId = id;
  }

  goBack() {
    this.selectedId = null;
  }

}
