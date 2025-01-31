// Nel RegisterDTO oltre ad inserire le proprietà imposte dal server posso inserire tutte quelle reputo utili alla registrazione (es. name)
export class RegisterDTO {
  constructor(
    public email: string = '',
    public password: string = '',
    public name: string = ''
  ) {}
}

// Nel LoginDTO inserisco solamente le proprietà che servono ad affettuare il login
export class LoginDTO {
  constructor(public email: string = '', public password: string = '') {}
}

// Nel valore di ritorno della POST del login abbiamo lo user e l'accessToken
// Lo user:
export type User = {
  id: number;
  name: string;
  email: string;
};

// Access Token (modello che definisce l'utente autenticato)
export type LoggedUser = {
  accessToken: string;
  user: User;
};
