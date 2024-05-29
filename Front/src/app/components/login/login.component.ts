import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginRequest } from 'app/interfaces/loginRequest-interfaces';
import { LoginService } from 'app/services/login.service';
import { UsuarioService } from 'app/services/usuario.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite()

  }
  private fb = inject(FormBuilder);
  private router = inject(Router);
  //injectar servicio
  private _apiSerive = inject(LoginService);

  loginError: string = "";

  //formulario definido usando formbuilder
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  get username() {
    return this.form.controls['username'];
  }
  get password() {
    return this.form.controls['password'];
  }
  login() {
    if (this.form.valid) {
      this.loginError = "";
      this._apiSerive.login(this.form.value as LoginRequest).subscribe({
        next: (userData) => {
          let token: string = this._apiSerive.userRoleValue;
          console.log(userData);
         this.redirectBasedOnRole(token);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.form.reset();
        }
      });
    } else {
      this.form.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }

  private redirectBasedOnRole(role: string) {
    if (role === 'administrador') {
      this.router.navigateByUrl('/administrador');
    } else if (role === 'secretaria') {
      this.router.navigateByUrl('/secretaria');
    }else if (role === 'doctor') {
      this.router.navigateByUrl('/doctor');
    } else {
      console.error('Role no reconocido');
      this.loginError = 'Role no reconocido';
    }
  }

}


