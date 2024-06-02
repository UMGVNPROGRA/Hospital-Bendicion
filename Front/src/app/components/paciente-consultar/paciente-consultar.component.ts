import { Component } from '@angular/core';
import { PacienteInterfaces } from 'app/interfaces/paciente-interfaces';
import { PacienteService } from 'app/services/paciente.service';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paciente-consultar',
  standalone: true,
  imports: [
    CommonModule,RouterLink
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
    this.service.getPaciente().subscribe((data) => {
      
        this.paciente = data;
        console.table(this.paciente)
    
      });
    }

}
