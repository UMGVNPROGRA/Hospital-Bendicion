import { Component } from '@angular/core';
import { PacienteInterfaces } from 'app/interfaces/paciente-interfaces';
import { PacienteService } from 'app/services/paciente.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-paciente-consultar',
  standalone: true,
  imports: [],
  templateUrl: './paciente-consultar.component.html',
  styleUrl: './paciente-consultar.component.scss'
})
export class PacienteConsultarComponent {
  
  constructor(private service: PacienteService){}
  paciente: PacienteInterfaces [] = []

  ngOnIni(): void {
    initFlowbite();
    this.getPaciente();   
  }

  getPaciente() {
    this.service.getpaciente().subscribe({
      next: value => {
        this.paciente = value.data;
        console.table(this.paciente)
      },
      error: error => console.error(error)})
  }

}
