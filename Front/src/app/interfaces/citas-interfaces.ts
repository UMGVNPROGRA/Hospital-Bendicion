import {PacienteInterfaces} from "./paciente-interfaces";
import {UsuarioInterfaces} from "./usuario-interfaces";
import {MedicoInterfaces} from "./medico-interfaces";

export interface CitasInterfaces {
  "id_cita": number,
  "paciente": PacienteInterfaces,
  "fecha_cita": string,
  "descripcion": string,
  "usuario": UsuarioInterfaces,
  "medico": MedicoInterfaces,
  "estado": string
}
