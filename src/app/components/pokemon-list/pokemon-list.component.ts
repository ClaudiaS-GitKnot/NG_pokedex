import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { NotificheService } from 'src/app/services/notifiche.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  errorMessage = '';

  constructor(private ps: PokemonService, private ns: NotificheService) {}

  // Catch errore con pipe (Rxjs)
  ngOnInit(): void {
    this.ps
      .search()
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage =
            'Sì è verificato un errore nel recupero dei Pokemons. ' +
            err.message;
          this.ns.nuovaNotifica(this.errorMessage);
          return of(undefined);
        })
      )
      .subscribe((dati) => {
        if (dati) {
          this.pokemons = dati.data;
          this.ns.nuovaNotifica(`Trovati ${this.pokemons.length} Pokemons.`);
        } else {
          this.pokemons = [];
        }
      });
  }
}
