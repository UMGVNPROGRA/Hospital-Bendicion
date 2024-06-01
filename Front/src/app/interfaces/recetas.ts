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
    "fecha": string | null
    "nombre": String
    "nombre_medico": String
}


export interface RecetasConsultaEditar {
    "id_receta": number
    "id_cita":  number
    "fecha": string | null
    "nombre": String
    "nombre_medico": String
    "detalle": Detalle []
}

export interface Detalle {
    "id_medicamento": number
    "nombre_medicamento":  string
    "descripcion": string 
}
