import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Rol } from 'app/interfaces/rol';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: 'app-mod-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './mod-user.component.html',
  styleUrl: './mod-user.component.scss'
})
export class ModUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadRoles();
    this.loadUser();
  }


  userList: UsuarioInterfaces[] = [];
  roles: Rol[] = [];

  private idUsername: number = 97;
  private _apiService = inject(UsuarioService);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    rolId: ['', [Validators.required]],
    rolName: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  get username() {
    return this.form.controls['username'];
  }
  get rolId() {
    return this.form.controls['rolId'];
  }
  get rolName() {
    return this.form.controls['rolName'];
  }
  get password() {
    return this.form.controls['password'];
  }
  selectIdUser(event: Event) {
    const selectedIdUser = (event.target as HTMLSelectElement).value;
    const selectedId = this.userList.find(user => user.idUsuario === +selectedIdUser);
    if (selectedId) {

      this.idUsername = selectedId.idUsuario;
      console.log("Id obtenido de usuario"+ this.idUsername)
    }
  }

  updateUser() {
    if (this.form.valid) {
      const userRequest = {
        username: this.form.value.username,
        role: {
          idRole: this.form.value.rolId,
          nombre: this.form.value.rolName
        },
        password: this.form.value.password
      };

      console.log('Datos enviados:', userRequest);

      this._apiService.updateUser(this.idUsername, userRequest).subscribe({
        next: () => {
          console.log("Registro exitoso");
          alert("Modificado con exito")

        },
        error: (errorData) => {
          console.error('Error en la solicitud:', errorData);
          alert("Error al modificar el usuario")
        },
        complete: () => {
          console.info("Registro Completado");
          this.form.reset();
        }
      });
    } else {
      this.form.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
  loadRoles() {
    this._apiService.getRoles().subscribe((roles: Rol[]) => {
      console.log(roles);
      this.roles = roles;
    });
  }

  loadUser() {
    this._apiService.getUsers().subscribe((data: UsuarioInterfaces[]) => {
      console.log("datos obtenidos de spring boot");
      console.log(data);
      this.userList = data;
    })
  }
  selectRole(event: Event) {
    const selectedRoleId = (event.target as HTMLSelectElement).value;
    const selectedRole = this.roles.find(role => role.idRole === +selectedRoleId);
    if (selectedRole) {
      this.form.patchValue({
        rolId: selectedRole.idRole,
        rolName: selectedRole.nombre
      });
    }
  }



  regUser() {
    this.router.navigate(['/administrador/reguser']);
  }
  viewUser() {
    this.router.navigate(['/administrador/usuarios']);
  }
  modUser() {
    this.router.navigate(['/administrador/updateuser']);
  }


}
