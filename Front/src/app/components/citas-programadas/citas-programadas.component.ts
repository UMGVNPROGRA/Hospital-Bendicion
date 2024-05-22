import { Component } from '@angular/core';
import {CitasGestionComponent} from "../citas-gestion/citas-gestion.component";

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

}
