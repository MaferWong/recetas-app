import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class ServicioRecetas {
  apiURL = 'https://localhost:44395/api/receta';

  constructor(private http: HttpClient) { }

  obtenerReceta(id: Number) {
    return this.http.get<Receta>(this.apiURL + '/' + id);
  }

  obtenerRecetas() {
    return this.http.get<Receta[]>(this.apiURL);
  }

  crearReceta(receta: Receta) {
    return this.http.post<Receta>(this.apiURL, receta);
  }

  editarReceta(receta: Receta) {
    return this.http.put<Receta>(this.apiURL + '/' + receta.id, receta);
  }

  borrarReceta(id: Number) {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
