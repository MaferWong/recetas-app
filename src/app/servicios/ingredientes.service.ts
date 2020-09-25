import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from '../modelos/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class ServicioIngredientes {
  apiURL = 'https://localhost:44395/api/ingrediente';

  constructor(private http: HttpClient) { }

  obtenerIngredientes() {
    return this.http.get<Ingrediente[]>(this.apiURL);
  }
}
