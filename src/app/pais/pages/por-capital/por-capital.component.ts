import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';

  constructor(private paisService: PaisService) {}

  Buscar() {
    console.log('buscate', this.termino);
    this.paisService.buscarPais(this.termino).subscribe((data) => {
      console.log('data', data);
    });
  }

  ngOnInit(): void {}
}
