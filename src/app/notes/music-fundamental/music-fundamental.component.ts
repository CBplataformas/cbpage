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
    { name: 'Monocordio', definicion: 'cercana a un bajo'},
    { name: 'Semiología', definicion: 'Estudio de los símbolos'},
    { name: 'Clave', definicion: ' Símbolo que le da nombre a las líneas y espacios del pentagrama y les ofrece una altura al mismo.' },
    { name: 'Armadura de tonalidad', definicion: 'Es el espacio que se le da para colocar los sostenidos y bemoles de la partitura.' },
    { name: 'Tonalidad', definicion: 'es el sistema que organiza los sonidos de una obra musical alrededor de una nota principal llamada tónica.' },
    { name: 'Enarmonia', definicion: 'Dos notas de diferente nombre y suenan igual' },
    { name: 'Notas Homónimas', definicion: ' Son dos notas que se llaman igual pero suenan diferente'},
    { name: 'Dinamicas', definicion: 'Son variación de intensidad o volumen en la interpretación musical' },
    { name: 'Articulación Musical', definicion: 'Es la manera en que se ataca, conecta o separa cada nota para darle expresión y carácter.' },
    { name: 'Nota', definicion: 'Es un símbolo que representa un sonido musical con una altura y duración determinadas.' },
    { name: 'Pentagrama', definicion: ' Es un conjunto de cinco líneas y cuatro espacios donde se escriben las notas y otros signos musicales ' },
    { name: 'El ritmo', definicion: 'es la organización de los sonidos en el tiempo mediante patrones de duración y acento.' },
    { name: 'La melodía', definicion: 'es una sucesión de notas organizadas en el tiempo que forman una frase musical con sentido.' },
    { name: 'El pulso', definicion: 'es la unidad básica y constante del tiempo en la música' },
    { name: 'Armonía', definicion: 'es el conjunto de sonidos que suenan simultáneamente y que apoyan o acompañan la melodía. ' },
  ];
  active = 1;
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
    const stave = system.addStave({
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
