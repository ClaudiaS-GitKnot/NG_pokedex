import { Component } from '@angular/core';
import { NotificheService } from 'src/app/services/notifiche.service';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.css'],
})
export class NotificheComponent {
  constructor(public ns: NotificheService) {}
}
