import { CitasInterfaces } from "./citas-interfaces";
import { Medicamentos } from "./medicamentos-interface";


export interface Recetas {
    "id_receta": number
    "cita":  CitasInterfaces
    "fecha": Date 
    "medicamento": Medicamentos
}

export interface RecetasConsulta {
    "id_receta": number
    "id_cita":  number
    "fecha": Date 
    "nombre": String
    "nombre_medico": String
}
