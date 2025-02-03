import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-catturati',
  templateUrl: './pokemon-catturati.component.html',
  styleUrls: ['./pokemon-catturati.component.css'],
})
export class PokemonCatturatiComponent implements OnInit {
  errorMessage = '';

  constructor(private ps: PokemonService) {}

  ngOnInit(): void {
    this.ps
      .getCatturati()
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe((dati) => console.log(dati));
  }
}
