export interface MedicoRequest {
  nombre_medico: string
  apellido_medico: string
  especialidad: Especialidad
  id_usuario: number
  telefono: string
  jornada: string
  cod_jefe_inmediato: number
  colegiado: string
  fechaCreacion: string
  direccion: string
  centro_hospitalario: string
  edad: number
  observaciones: string
}

export interface Especialidad {
  id_especialidad: number
}
