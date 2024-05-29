import { Component} from '@angular/core';
import { PacienteInterfaces } from 'app/interfaces/paciente-interfaces';
import { PacienteService } from 'app/services/paciente.service';
import { initFlowbite } from 'flowbite';

@Component({  
  selector: 'app-paciente',
  standalone: true,
  imports: [],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent{

  constructor(private service: PacienteService){}
  paciente: PacienteInterfaces [] = []

  ngOnInit(): void {
    initFlowbite();     
  }

}
