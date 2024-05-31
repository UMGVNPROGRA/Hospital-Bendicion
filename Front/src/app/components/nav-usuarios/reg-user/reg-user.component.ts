import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Rol } from 'app/interfaces/rol';
import { UserRequest } from 'app/interfaces/userRequest';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { LoginService } from 'app/services/login.service';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router, private service: LoginService) { }

  userList: UsuarioInterfaces[] = [];
  roles: Rol[] = [];

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


  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this._apiService.getRoles().subscribe((roles: Rol[]) => {
      console.log(roles);
      this.roles = roles;
    });
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

  registroUser() {
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

      this._apiService.postUser(userRequest).subscribe({
        next: () => {
          console.log("Registro exitoso");
        },
        error: (errorData) => {
          console.error('Error en la solicitud:', errorData);
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



  regUser() {
    this.router.navigate(['/administrador/reguser']);
  }
  viewUser() {
    this.router.navigate(['/administrador/usuarios']);
  }
}
