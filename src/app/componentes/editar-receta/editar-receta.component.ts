import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/modelos/ingrediente';
import { Receta } from 'src/app/modelos/receta';
import { ServicioIngredientes } from 'src/app/servicios/ingredientes.service';
import { ServicioRecetas } from 'src/app/servicios/recetas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css']
})
export class ComponenteEditarReceta implements OnInit {
  ingredientes: Ingrediente[];
  receta: Receta;

  constructor(private servicioRecetas: ServicioRecetas, private servicioIngredientes: ServicioIngredientes, private enrutador: Router, private ruta: ActivatedRoute) {
    this.receta = new Receta();
  }

  ngOnInit(): void {
    const id = +this.ruta.snapshot.paramMap.get('id');

    this.servicioIngredientes.obtenerIngredientes().subscribe(res => {
      this.ingredientes = res;
    });

    this.servicioRecetas.obtenerReceta(id).subscribe(res => {
      this.receta = res;
    });
  }

  editarReceta() {
    this.servicioRecetas.editarReceta(this.receta).subscribe(() => {
      this.enrutador.navigate(['/recetas']);
    });
  }

  cancelar() {
    this.enrutador.navigate(['/recetas']);
  }

}
