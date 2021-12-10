import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: Boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  Buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    console.log('buscate', this.termino);

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log('paises', paises);
        this.paises = paises;
      },
      (err) => {
        console.log('err', err);
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        console.log('sugerencias', paises);
        this.paisesSugeridos = paises.splice(0, 5);
      },
      (err) => (this.paisesSugeridos = [])
    );
  }

  buscarSugerido(termino: string) {
    this.Buscar(termino);
  }
}
