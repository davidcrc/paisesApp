import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  // REVIEW: Aqui emite el buscar de el form
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  constructor() {}

  ngOnInit(): void {}

  Buscar() {
    this.onEnter.emit(this.termino);
  }
}
