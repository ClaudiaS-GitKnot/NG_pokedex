import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificheService } from 'src/app/services/notifiche.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public ns: NotificheService, private as: AuthService) {}
  logout() {
    this.as.logout();
  }
}
