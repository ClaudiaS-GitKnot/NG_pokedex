import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCatturatiComponent } from './pokemon-catturati.component';

describe('PokemonCatturatiComponent', () => {
  let component: PokemonCatturatiComponent;
  let fixture: ComponentFixture<PokemonCatturatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCatturatiComponent]
    });
    fixture = TestBed.createComponent(PokemonCatturatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
