import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['../../../assets/css/style.css']
})

export class PokemonListComponent implements OnInit {

  data: any[] = [];
  dataFiltered: any[] = [];
  search: any;
  totalPokemonsData: any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    console.log(this.dataFiltered);
    this.dataFiltered = [];
    this.getPokemons();
    this.totalPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons().subscribe({
      next: (val) => {
        this.data = val;
        this.dataFiltered = [];
     },
      error: (err) => { },
      complete: () => {  }
  });
  }

  delPokemons(id:any){
    this.pokemonService.delPokemons(id).subscribe({
      next: (val) => {
        this.data = val;
        this.getPokemons();
     },
      error: (err) => { },
      complete: () => {  }
    })
  }

  searchPokemon(value:any){
    console.log(value);
    if(value){
      this.dataFiltered = this.data.filter(function(v, i) {
        return (v.name.includes(value));
      })
      this.data = this.dataFiltered;
      console.log(this.dataFiltered)
    }else{
      this.dataFiltered = [];
      this.getPokemons();
    }
  }

  totalPokemons(){
    this.pokemonService.getCountPokemons().subscribe({
      next: (val) => {
        this.totalPokemonsData = val;
        console.log(val);
     },
      error: (err) => { },
      complete: () => {  }
  });
  }

}
