import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { LoginService } from 'app/services/login.service';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, UsuarioComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private service: LoginService) { }
  userList: UsuarioInterfaces[] = [];

  private _apiService = inject(UsuarioService);

  ngOnInit(): void {
    this._apiService.getUsers().subscribe((data: UsuarioInterfaces[]) => {
      console.log("datos obtenidos de spring boot");
      console.log(data);
      this.userList = data;
    })

  }

  editUser(user: any) {
    // Lógica para editar el usuario
    console.log('Editar usuario:', user);
  }

  deleteUser(idUser: number) {
    // Lógica para eliminar el usuario
    this._apiService.deleteUser(idUser).subscribe({
      next: () => {
        console.log("Usuario eliminado con ID" + idUser);
        alert("Usuario elimindo con exito")
        //esto es para que actualice la lista sin necesidad de recargar la pagina
        this.userList = this.userList.filter(user => user.idUsuario !== idUser);

        //this.userList = this.userList.filter(user => user.idUsuario !== idUser);
      },
      error: (error) => {
        console.error("Error al eliminar el Usuario ", error);
        alert("Error al eliminar usuario")
      }
    })


  }
  openAddUserModal() {
    throw new Error('Method not implemented.');
  }

  regUser() {
    this.router.navigate(['/administrador/reguser']);

  }
  viewUser() {
    this.router.navigate(['/administrador/usuarios']);

  }
  updateUser() {
    this.router.navigate(['/administrador/updateuser']);
  }


}
