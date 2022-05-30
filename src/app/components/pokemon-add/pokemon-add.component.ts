import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { AppRoutingModule } from '../../app-routing.module';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class PokemonAddComponent implements OnInit {
  data: any[] = [];
  message: any;
  defense: any;
  attack:any;
  name: any;
  image:any;
  constructor(private pokemonService: PokemonService, private PokemonListComponent: PokemonListComponent) { }

  ngOnInit(): void {
  }

  addPokemons(dataAdd:any){
    console.log(dataAdd);
  if (dataAdd.name || dataAdd.image || dataAdd.defense || dataAdd.attack) {
    dataAdd.idAuthor = 1;
    dataAdd.hp = 13;
    dataAdd.type = "water";
    this.pokemonService.addPokemons(dataAdd).subscribe({
      next: (val) => {
        this.message = "Se Agregó el Pokemon";
        this.PokemonListComponent.getPokemons();
      },
      error: (err) => { },
      complete: () => {
      }
    });
  }else{
    this.message = "Debe revisar los campos requeridos";
  }
  }

}


