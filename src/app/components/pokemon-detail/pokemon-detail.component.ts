import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;
  errorMessage = '';

  constructor(private ps: PokemonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ps
      .getPokemonById(id!)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = 'Impossibile recuperare il Pokemon con id: ' + id;
          return of(undefined);
        })
      )
      .subscribe((dati) => {
        if (dati) {
          this.pokemon = dati.data;
        }
      });
  }
}
