import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Input() termino: string = '';

  constructor() {}

  ngOnInit(): void {}

  Buscar() {
    console.log('buscaa', this.termino);
  }
}
