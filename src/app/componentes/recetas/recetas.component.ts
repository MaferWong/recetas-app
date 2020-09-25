import { Component, OnInit } from '@angular/core';
import { ServicioRecetas } from 'src/app/servicios/recetas.service';
import { Router } from '@angular/router';
import { Receta } from 'src/app/modelos/receta';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class ComponenteRecetas implements OnInit {
  recetas: Receta[];

  constructor(private servicioRecetas: ServicioRecetas, private enrutador: Router) { }

  ngOnInit(): void {
    this.obtenerRecetas();
  }

  borrarReceta(id: Number) {
    const res = confirm("¿Estás seguro que quieres borrar esta receta?");
    if (res) {
      this.servicioRecetas.borrarReceta(id).subscribe(() => {
        this.obtenerRecetas();
      });
    }
  }

  crearReceta() {
    this.enrutador.navigate(['/recetas/crear']);
  }

  editarReceta(id: Number) {
    this.enrutador.navigate(['/recetas/editar', id]);
  }

  obtenerRecetas() {
    this.servicioRecetas.obtenerRecetas().subscribe(data => {
      this.recetas = data;
    });
  }



}
