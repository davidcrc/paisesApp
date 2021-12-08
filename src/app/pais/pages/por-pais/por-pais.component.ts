import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  Buscar() {
    console.log('buscate', this.termino);
    this.paisService.buscarPais(this.termino).subscribe((data) => {
      console.log('data', data);
    });
  }
}
