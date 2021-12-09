import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: Boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  Buscar(termino: string) {
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
    // TODO: crear sugernecias
  }
}
