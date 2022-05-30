import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<any>(`${this.baseUrl}/?idAuthor=1`);
  }

  addPokemons(data:any){
    return this.http.post<any>(`${this.baseUrl}/?idAuthor=1`, data);
  }

  getByIdPokemons(id:any){
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getCountPokemons(){
    return this.http.get<any>(`${this.baseUrl}/count?idAuthor=1`);
  }

  updatePokemons(data:any){
    return this.http.put<any>(`${this.baseUrl}/${data.id}`,data);
  }

  delPokemons(id:any){
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
