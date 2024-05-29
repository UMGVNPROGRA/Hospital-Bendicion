import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsuarioComponent } from 'app/components/usuario/usuario.component';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-menu-doctor',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, UsuarioComponent],
  templateUrl: './menu-doctor.component.html',
  styleUrl: './menu-doctor.component.scss'
})
export class MenuDoctorComponent implements OnInit{

  constructor(private router: Router, private service: LoginService) { }
  ngOnInit(): void {

  }

  logout() {
    this.service.logout()
    this.router.navigate(['']);
  }


  modHistorial() {
    this.router.navigate(['/doctor/historial']);

  }


  modCitasProgra() {
    this.router.navigate(['/doctor/citasprogramadas']);

  }

  modMedicamento() {
    this.router.navigate(['/doctor/medicamentos']);

  }
  modRecetas() {
    this.router.navigate(['/doctor/recetas']);

  }



}
