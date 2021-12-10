import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // TODO: Refactor this, down is refactored
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log('params', params);
    //   this.paisService.obtenerPais(params['id']).subscribe((pais) => {
    //     console.log('el pais', pais);
    //   });
    // });

    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPaisByAlpha(params['id']))
      )
      .subscribe((resp) => {
        console.log('data', resp);
      });
  }
}
