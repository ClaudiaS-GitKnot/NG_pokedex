import { Component, Input } from '@angular/core';
import { Attack } from 'src/app/models/pokemon.model';
import { NotificheService } from 'src/app/services/notifiche.service';

@Component({
  selector: 'app-pokemon-attack',
  templateUrl: './pokemon-attack.component.html',
  styleUrls: ['./pokemon-attack.component.css'],
})
export class PokemonAttackComponent {
  @Input() attack?: Attack;

  constructor(private ns: NotificheService) {}

  attacca() {
    this.ns.nuovaNotifica(`${this.attack!.name}`);
  }
}
