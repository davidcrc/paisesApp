import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  // REVIEW: Aqui emite el buscar de el form
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      // console.log('debo', valor);

      this.onDebounce.emit(valor);
    });
  }

  Buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
