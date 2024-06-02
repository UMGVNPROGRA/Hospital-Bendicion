import {EspecialidadesInterfaces} from "./especialidades-interfaces";

export interface MedicoInterfaces {
  "id_medico": number,
  "nombre_medico": string,
  "apellido_medico": string,
  "id_especialidad": EspecialidadesInterfaces,
  "id_usuario": number,
  "telefono": string,
  "jornada": number,
  "cod_jefe_inmediato": string
}
