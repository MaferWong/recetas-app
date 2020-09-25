import { Ingrediente } from './ingrediente';

export class Receta {
    id: Number;
    nombre: String;
    tipo: String;
    ingredienteId: Number;
    ingrediente: Ingrediente;
}