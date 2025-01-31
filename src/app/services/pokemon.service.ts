import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CardResponse,
  Pokemon,
  SearchCardsResponse,
} from '../models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

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
}
