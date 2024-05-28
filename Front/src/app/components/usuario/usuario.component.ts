import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {


  userList: UsuarioInterfaces[] = [];

  private _apiService = inject(UsuarioService);

  ngOnInit(): void {
    this._apiService.getUsers().subscribe((data: UsuarioInterfaces[]) => {
      console.log("datos obtenidos de spring boot");
      console.log(data);
      this.userList = data;
    });

  }

  editUser(user: any) {
    // Lógica para editar el usuario
    console.log('Editar usuario:', user);
  }

  deleteUser(userId: number) {
    // Lógica para eliminar el usuario
    console.log('Eliminar usuario con ID:', userId);
    this.userList = this.userList.filter(user => user.idUsuario !== userId);
  }
  openAddUserModal() {
    throw new Error('Method not implemented.');
    }



}
