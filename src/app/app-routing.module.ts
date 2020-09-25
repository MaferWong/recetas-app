import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteRecetas } from './componentes/recetas/recetas.component';
import { ComponenteCrearReceta } from './componentes/crear-receta/crear-receta.component';
import { ComponenteEditarReceta } from './componentes/editar-receta/editar-receta.component';
import { ComponenteInicio } from './componentes/inicio/inicio.component';
import { ComponentePaginaNoSeEncuentra } from './componentes/pagina-no-se-encuentra/pagina-no-se-encuentra.component';

const rutas: Routes = [
  { path: 'recetas', component: ComponenteRecetas },
  { path: 'recetas/crear', component: ComponenteCrearReceta },
  { path: 'recetas/editar/:id', component: ComponenteEditarReceta },
  { path: '', component: ComponenteInicio },
  { path: '**', component: ComponentePaginaNoSeEncuentra },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
