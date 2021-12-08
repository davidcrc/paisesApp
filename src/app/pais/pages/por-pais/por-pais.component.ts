import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: Boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  Buscar() {
    this.hayError = false;
    console.log('buscate', this.termino);

    this.paisService.buscarPais(this.termino).subscribe(
      (data) => {
        console.log('data', data);
      },
      (err) => {
        console.log('err', err);
        this.hayError = true;
      }
    );
  }
}
