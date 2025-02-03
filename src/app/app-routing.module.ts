import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PokemonCatturatiComponent } from './components/pokemon-catturati/pokemon-catturati.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/catturati', component: PokemonCatturatiComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
