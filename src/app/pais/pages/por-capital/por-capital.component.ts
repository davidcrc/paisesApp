import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';

  constructor() {}

  Buscar() {
    console.log('buscate', this.termino);
  }

  ngOnInit(): void {}
}
