import {UsuarioInterfaces} from "./usuario-interfaces";

export interface PacienteInterfaces {
  "id_paciente": number,
  "nombre": string,
  "apellido": string,
  "fecha_nacimiento": string,
  "direccion": string,
  "telefono": string,
  "dpi": string,
  "nit": string,
  "email": string,
  "genero": string,
  "estado": string,
  "usuario": UsuarioInterfaces
}
