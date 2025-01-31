import { Component, Input } from '@angular/core';
import { Attack } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-attack',
  templateUrl: './pokemon-attack.component.html',
  styleUrls: ['./pokemon-attack.component.css'],
})
export class PokemonAttackComponent {
  @Input() attack?: Attack;
}
