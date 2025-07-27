import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Card} from "../card.model";
import {MusicFundamentalComponent} from "../music-fundamental/music-fundamental.component";
import {
    PrincipleArchitectureDesignComponent
} from "../principle-architecture-design/principle-architecture-design.component";

@Component({
  selector: 'app-list-architecture-notes',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
        MusicFundamentalComponent,
        PrincipleArchitectureDesignComponent
    ],
  templateUrl: './list-architecture-notes.component.html',
  styleUrl: './list-architecture-notes.component.css'
})
export class ListArchitectureNotesComponent {
    selectedId: string | null = null;
    cards: Card[] = [
        { id: '1',title: 'Principles of architectural design', description: 'You are going to fin the basic principle of software architecture'},
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
