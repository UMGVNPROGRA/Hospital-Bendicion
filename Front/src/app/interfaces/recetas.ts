import { CitasInterfaces } from "./citas-interfaces";
import { Medicamentos } from "./medicamentos-interface";


export interface Recetas {
    "id_receta": number
    "cita":  CitasInterfaces
    "fecha": Date 
    "medicamento": Medicamentos
}
