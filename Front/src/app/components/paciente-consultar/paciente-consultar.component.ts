import { Component } from '@angular/core';
import { PacienteInterfaces } from 'app/interfaces/paciente-interfaces';
import { PacienteService } from 'app/services/paciente.service';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente-consultar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './paciente-consultar.component.html',
  styleUrl: './paciente-consultar.component.scss'
})
export class PacienteConsultarComponent {
  
  constructor(private service: PacienteService){}
  paciente: PacienteInterfaces [] = []

  ngOnInit(): void {
    initFlowbite();

    this.getpaciente();   
  }

  getpaciente() {
    this.service.getPaciente().subscribe({
      next: value => {
        this.paciente = value.data;
        console.table(this.paciente)
      },
      error: error => console.error(error)})
  }

}
