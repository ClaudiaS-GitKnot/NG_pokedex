import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CardResponse,
  Pokemon,
  PokemonCatturato,
  SearchCardsResponse,
} from '../models/pokemon.model';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient, private as: AuthService) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'X-Api-Key': environment.POKEMON_SERVER_API_KEY,
    }),
  };

  search(pageSize: number = 20): Observable<SearchCardsResponse> {
    return this.http.get<SearchCardsResponse>(
      `${environment.POKEMON_SERVER_BASE_URL}/cards?pageSize=${pageSize}`,
      this.httpOptions
    );
  }

  getPokemonById(id: string): Observable<CardResponse> {
    return this.http.get<CardResponse>(
      `${environment.POKEMON_SERVER_BASE_URL}/cards/${id}`,
      this.httpOptions
    );
  }

  getCatturati(): Observable<PokemonCatturato[]> {
    // Autorizza il recupero dei pokemon che l'utente ha catturato allegando l'accessToken all'header Authorization
    // L'accessToken viene generato durante il login
    // L'utente potrebbe essere loggato o no (nullable)
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.as.getLoggedUser()?.accessToken,
      }),
    };

    // Restituisci con chiamata http il pokemon catturato insieme all'autorizzazione
    // GET http://localhost:3000/cattu?userId=1
    return this.http.get<PokemonCatturato[]>(
      `${environment.JSON_SERVER_BASE_URL}/catturati?userId=` +
        this.as.getLoggedUser()?.user.id,
      httpOptions
    );
  }
}
