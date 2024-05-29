import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-menu-secretaria',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink,CommonModule],
  templateUrl: './menu-secretaria.component.html',
  styleUrl: './menu-secretaria.component.scss'
})
export class MenuSecretariaComponent implements OnInit{

  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {

  }

  logout() {
    this.service.logout()
    this.router.navigate(['']);
  }


  modHistorial() {
    this.router.navigate(['/secretaria/historial']);

  }
  modPaciente() {
    this.router.navigate(['/secretaria/paciente']);

  }
  modCitas() {
    this.router.navigate(['/secretaria/citas']);

  }
  modCitasProgra() {
    this.router.navigate(['/secretaria/citasprogramadas']);

  }
  modFactura() {
    this.router.navigate(['/secretaria/factura']);

  }
  modMedicamento() {
    this.router.navigate(['/secretaria/medicamentos']);

  }


}
