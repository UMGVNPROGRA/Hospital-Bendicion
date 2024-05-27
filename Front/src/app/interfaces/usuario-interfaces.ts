export interface Role {
  idRole: number;
  nombre: string;
  descripcion: string;
  accesos: string;
}

export interface Authority {
  authority: string;
}

export interface UsuarioInterfaces {
  idUsuario: number;
  username: string;
  role: Role;
  passwordUsuario: string;
  enabled: boolean;
  authorities: Authority[];
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  password: string;
  accountNonLocked: boolean;
}
