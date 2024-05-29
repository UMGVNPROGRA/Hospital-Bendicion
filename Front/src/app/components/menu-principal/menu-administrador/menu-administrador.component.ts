import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { UsuarioComponent } from "../../usuario/usuario.component";

@Component({
    selector: 'app-menu-administrador',
    standalone: true,
    templateUrl: './menu-administrador.component.html',
    styleUrl: './menu-administrador.component.scss',
    imports: [RouterOutlet, CommonModule, RouterLink, UsuarioComponent]
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private router: Router, private service: LoginService ){}
  ngOnInit(): void {

  }

  logout(){
    this.service.logout()
    this.router.navigate(['/secretaria']);
  }

  modUser(){
    this.router.navigate(['/administrador/user']);

  }
  modHistorial(){
    this.router.navigate(['/administrador/modhistorial']);

  }



}
