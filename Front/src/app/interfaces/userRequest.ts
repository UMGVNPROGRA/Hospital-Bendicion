export interface Role {
  idRole: number;
  //nombre: string;

}

export interface UserRequest {
  username: string;
  role: Role;
  password: string;
}
