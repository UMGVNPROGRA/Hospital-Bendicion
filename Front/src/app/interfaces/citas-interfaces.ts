import {PacienteInterfaces} from "./paciente-interfaces";
import {UsuarioInterfaces} from "./usuario-interfaces";
import {MedicoInterfaces} from "./medico-interfaces";

export interface CitasInterfaces {

  "id_cita": 2,
  "paciente": PacienteInterfaces,
  "fecha_cita": string,
  "descripcion": "descripcion cita",
  "usuario": UsuarioInterfaces,
  "id_medico": MedicoInterfaces,
  "estado": string
}
