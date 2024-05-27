import { Role } from "./usuario-interfaces";

export interface UserRequest {
  username: string;
  role: Role;
  password: string;
}
