import { Component } from '@angular/core';
import {CitasGestionComponent} from "../citas-gestion/citas-gestion.component";
import {CitasService} from "../../services/citas.service";
import {CitasInterfaces} from "../../interfaces/citas-interfaces";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-citas-programadas',
  standalone: true,
    imports: [
        CitasGestionComponent
    ],
  templateUrl: './citas-programadas.component.html',
  styleUrl: './citas-programadas.component.scss'
})
export class CitasProgramadasComponent {

  constructor(private service: CitasService) {}
  cita: CitasInterfaces [] = []

  ngOnInit() {
    initFlowbite();
    this.getCitas();
  }

  getCitas() {
    this.service.getcitas().subscribe({
      next: value => {
        this.cita = value.data;
        console.table(this.cita)
      },
      error: error => console.error(error)})
  }

}
