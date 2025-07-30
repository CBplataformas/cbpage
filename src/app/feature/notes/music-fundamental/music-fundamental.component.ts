import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {NgbNavModule, NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {Factory} from "vexflow";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-music-fundamental',
  standalone: true,
  imports: [NgbNavModule, CommonModule, NgbPopover],
  templateUrl: './music-fundamental.component.html',
  styleUrl: './music-fundamental.component.css'
})
export class MusicFundamentalComponent implements AfterViewInit {
  @Output() back = new EventEmitter<void>();

  words =  [
    { name: 'Monocordio', definition: 'cercana a un bajo'},
    { name: 'Semiología', definition: 'Estudio de los símbolos'},
    { name: 'Clave', definition: ' Símbolo que le da nombre a las líneas y espacios del pentagrama y les ofrece una altura al mismo.' },
    { name: 'Armadura de tonalidad', definition: 'Es el espacio que se le da para colocar los sostenidos y bemoles de la partitura.' },
    { name: 'Tonalidad', definition: 'es el sistema que organiza los sonidos de una obra musical alrededor de una nota principal llamada tónica.' },
    { name: 'Enarmonia', definition: 'Dos notas de diferente nombre y suenan igual' },
    { name: 'Notas Homónimas', definition: ' Son dos notas que se llaman igual pero suenan diferente'},
    { name: 'Dinamicas', definition: 'Son variación de intensidad o volumen en la interpretación musical' },
    { name: 'Articulación Musical', definition: 'Es la manera en que se ataca, conecta o separa cada nota para darle expresión y carácter.' },
    { name: 'Nota', definition: 'Es un símbolo que representa un sonido musical con una altura y duración determinadas.' },
    { name: 'Pentagrama', definition: ' Es un conjunto de cinco líneas y cuatro espacios donde se escriben las notas y otros signos musicales ' },
    { name: 'El ritmo', definition: 'es la organización de los sonidos en el tiempo mediante patrones de duración y acento.' },
    { name: 'La melodía', definition: 'es una sucesión de notas organizadas en el tiempo que forman una frase musical con sentido.' },
    { name: 'El pulso', definition: 'es la unidad básica y constante del tiempo en la música' },
    { name: 'Armonía', definition: 'es el conjunto de sonidos que suenan simultáneamente y que apoyan o acompañan la melodía. ' },
  ];
  musicalNotes = [
    { name: 'Do', sharps: 0, relativeMinor: 'La' },
    { name: 'Sol', sharps: 1, relativeMinor: 'Mi' },
    { name: 'Re', sharps: 2, relativeMinor: 'Si' },
    { name: 'La', sharps: 3, relativeMinor: 'Fa#' },
    { name: 'Mi', sharps: 4, relativeMinor: 'Do#' },
    { name: 'Si', sharps: 5, relativeMinor: 'Sol#' },
    { name: 'Fa#', sharps: 6, relativeMinor: 'Re#' },
    { name: 'Do#', sharps: 7, relativeMinor: 'La#' }
  ];
  musicalNotesBemol = [
    { name: 'Fa', bemol: 1, relativeMinor: 'Re' },
    { name: 'Si♭', bemol: 2, relativeMinor: 'Sol' },
    { name: 'Mi♭', bemol: 3, relativeMinor: 'Do' },
    { name: 'La♭', bemol: 4, relativeMinor: 'Fa' },
    { name: 'Re♭', bemol: 5, relativeMinor: 'Si♭' },
    { name: 'Sol♭', bemol: 6, relativeMinor: 'Mi♭' },
    { name: 'Do♭', bemol: 7, relativeMinor: 'La♭' },
  ];
  chords =  [
    { name: 'Mayor(triada)', definition: '1 - 3 - 5'},
    { name: 'Menor(triada)', definition: '1 - b3 - 5'},
    { name: 'Disminuido(triada)', definition: '1 - b3 - b5' },
    { name: 'Aumentado(triada)', definition: '1 - 3 - #5' },
    { name: 'Maj7', definition: '1 - 3 - 5 - 7' },
    { name: 'm7', definition: '1 - b3 - 5 - b7' },
    { name: '7', definition: '1 - 3 - 5 - b7'},
    { name: 'ø7', definition: '1 – ♭3 – ♭5 – ♭7' },
    { name: '°7', definition: '1 – ♭3 – ♭5 – 6 (o ♭♭7)' },
  ];
  active = 1;
  active2 = 1;
  onTabChange(id: number) {
    if (id === 1) {
      setTimeout(() => this.drawScore(), 0); // Espera a que el DOM del tab se renderice
    }
  }

  drawScore() {
    const output = document.getElementById('output');
    if (!output) return;

    const width = output.clientWidth;

    output.innerHTML = ''; // Limpiar antes de redibujar

    const factory = new Factory({
      renderer: { elementId: 'output', width, height: 200 }
    });

    const score = factory.EasyScore();
    const system = factory.System({ width: width - 20 });

    // Agregar pentagrama con compás y clave
    system.addStave({
      voices: [
        // Crea una voz con notas
        score.voice(score.notes('C4/q, D4/q, E4/q, F4/q'))
      ]
    }).addClef('treble').addTimeSignature('4/4');

    factory.draw();
  }

  ngAfterViewInit() {
    this.drawScore(); // Dibuja al cargar por primera vez
  }
}
