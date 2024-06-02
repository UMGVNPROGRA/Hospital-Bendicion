import {EspecialidadesInterfaces} from "./especialidades-interfaces";

export interface MedicoInterfaces {
  id_medico: number
  nombre_medico: string
  apellido_medico: string
  id_especialidad: EspecialidadesInterfaces
  id_usuario: number
  telefono: string
  jornada: string
  cod_jefe_inmediato: string
  colegiado: string
  fechaCreacion: string
  direccion: string
  centroHospitalario: string
  edad: number
  observaciones: string
}
