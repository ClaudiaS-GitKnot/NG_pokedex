import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model = new RegisterDTO();
  errorMessage = '';

  constructor(private as: AuthService, private router: Router) {}

  register() {
    this.as
      .register(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe((user) => {
        if (user) {
          this.router.navigate(['/login']);
        }
      });
  }
}
