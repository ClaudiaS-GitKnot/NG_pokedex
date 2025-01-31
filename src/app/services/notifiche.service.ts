import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificheService {
  messaggi: string[] = [];

  constructor() {}

  nuovaNotifica(messaggio: string) {
    this.messaggi.push(messaggio);
  }

  svuota() {
    this.messaggi = [];
  }
}
