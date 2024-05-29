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

  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {

  }

  logout() {
    this.service.logout()
    this.router.navigate(['']);
  }

  modUser() {
    this.router.navigate(['/administrador/usuarios']);

  }
  modHistorial() {
    this.router.navigate(['/administrador/historial']);

  }
  modPaciente() {
    this.router.navigate(['/administrador/paciente']);

  }
  modCitas() {
    this.router.navigate(['/administrador/citas']);

  }
  modCitasProgra() {
    this.router.navigate(['/administrador/citasprogramadas']);

  }
  modFactura() {
    this.router.navigate(['/administrador/factura']);

  }
  modMedicamento() {
    this.router.navigate(['/administrador/medicamentos']);

  }
  modRecetas() {
    this.router.navigate(['/administrador/recetas']);

  }
  modDoctores() {
    this.router.navigate(['/administrador/medico']);

  }







}
