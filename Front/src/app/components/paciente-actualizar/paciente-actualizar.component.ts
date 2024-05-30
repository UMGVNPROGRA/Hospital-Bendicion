import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { PacienteInterfaces } from 'app/interfaces/paciente-interfaces';
import { PacienteService } from 'app/services/paciente.service';

@Component({
  selector: 'app-paciente-actualizar',
  standalone: true,
  imports: [],
  templateUrl: './paciente-actualizar.component.html',
  styleUrl: './paciente-actualizar.component.scss'
})
export class PacienteActualizarComponent {

  constructor(private service: PacienteService){}
  paciente: PacienteInterfaces [] = []

  ngOnInit(): void {
    initFlowbite();     
  }
}
