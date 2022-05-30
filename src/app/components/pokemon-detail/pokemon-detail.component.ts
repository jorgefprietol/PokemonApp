import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class PokemonDetailComponent implements OnInit {
  data: any = {};
  message: any;
  defense: any;
  attack:any;
  name: any;
  image:any;
  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: { [x: string]: any; }) => {
      let id = params['id'];
      this.getByIdPokemons(`${id}`);
      });
   }

  ngOnInit(): void {

  }

  getByIdPokemons(id:any){
    this.pokemonService.getByIdPokemons(id).subscribe({
      next: (val) => {
        this.data = val;
     },
      error: (err) => {  },
      complete: () => {  }
  });
  }

  updatePokemons(dataUpdate:any){
    if (dataUpdate.name && dataUpdate.image && dataUpdate.defense && dataUpdate.attack) {
      dataUpdate.id = this.data.id;
      dataUpdate.idAuthor = 1;
      dataUpdate.hp = 13;
      dataUpdate.type = "water";
      this.pokemonService.updatePokemons(dataUpdate).subscribe({
        next: (val) => {
          this.data = val;
          this.message = null;
          this.name = null;
          this.defense = null;
          this.attack = null;
          this.image = null;
          this.message = "Se Actualizo el Pokemon";
       },
        error: (err) => { console.log(err) },
        complete: () => {  }
      })
    }else{
      this.message = "Debe revisar los campos requeridos";
    }
  }


  updateIdValue(){

  }

}
