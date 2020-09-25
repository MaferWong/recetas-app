import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ComponenteApp } from './app.component';
import { CommonModule } from '@angular/common';
import { ComponenteRecetas } from './componentes/recetas/recetas.component';
import { ComponenteCrearReceta } from './componentes/crear-receta/crear-receta.component';
import { ComponenteEditarReceta } from './componentes/editar-receta/editar-receta.component';
import { ComponenteInicio } from './componentes/inicio/inicio.component';
import { ComponenteNavegacion } from './componentes/navegacion/navegacion.component';
import { ComponentePaginaNoSeEncuentra } from './componentes/pagina-no-se-encuentra/pagina-no-se-encuentra.component';

@NgModule({
  declarations: [
    ComponenteApp,
    ComponenteRecetas,
    ComponenteCrearReceta,
    ComponenteEditarReceta,
    ComponenteInicio,
    ComponenteNavegacion,
    ComponentePaginaNoSeEncuentra,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ComponenteApp]
})
export class AppModule { }
