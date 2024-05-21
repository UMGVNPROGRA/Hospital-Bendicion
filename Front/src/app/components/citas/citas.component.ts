import { Component } from '@angular/core';
import {CitasProgramadasComponent} from "../citas-programadas/citas-programadas.component";
import {CitasGestionComponent} from "../citas-gestion/citas-gestion.component";

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    CitasProgramadasComponent,
    CitasGestionComponent
  ],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent {

}
