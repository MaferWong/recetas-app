import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/modelos/ingrediente';
import { Receta } from 'src/app/modelos/receta';
import { ServicioRecetas } from 'src/app/servicios/recetas.service';
import { ServicioIngredientes } from 'src/app/servicios/ingredientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css']
})
export class ComponenteCrearReceta implements OnInit {
  ingredientes: Ingrediente[];
  receta: Receta;

  constructor(private servicioRecetas: ServicioRecetas, private servicioIngredientes: ServicioIngredientes, private enrutador: Router) {
    this.receta = new Receta();
  }

  ngOnInit(): void {
    this.servicioIngredientes.obtenerIngredientes().subscribe(res => {
      this.ingredientes = res;
    });
  }

  crearReceta() {
    if (this.receta) {
      this.servicioRecetas.crearReceta(this.receta).subscribe(() => {
        this.enrutador.navigate(['/recetas']);
      });
    }
  }

  cancelar() {
    this.enrutador.navigate(['/recetas']);
  }

}
