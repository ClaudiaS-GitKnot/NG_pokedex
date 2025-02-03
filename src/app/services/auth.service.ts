import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUser, LoginDTO, RegisterDTO } from '../models/auth';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(model: LoginDTO): Observable<LoggedUser> {
    return this.http
      .post<LoggedUser>(`${environment.JSON_SERVER_BASE_URL}/login`, model)
      .pipe(
        // LocalStorage - Operatore tap (sbircio all'interno della pipe per accedere all'accessToken
        // Prende i dati (lo user)
        // tap((dati) => console.log('SERVIZIO AUTH: ', dati)),
        tap((user) => this.setLoggedUser(user))
      );
  }

  register(model: RegisterDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      `${environment.JSON_SERVER_BASE_URL}/register`,
      model
    );
  }

  // Metodo che dato un oggetto lo salva nel local storage
  setLoggedUser(user: LoggedUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    const loggedUser = localStorage.getItem('user');

    if (loggedUser) {
      return JSON.parse(loggedUser) as LoggedUser;
    }

    return null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
