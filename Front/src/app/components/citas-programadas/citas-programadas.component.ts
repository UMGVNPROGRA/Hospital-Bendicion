import { Component, OnInit } from '@angular/core';
import {CitasGestionComponent} from "../citas-gestion/citas-gestion.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-citas-programadas',
  standalone: true,
    imports: [
        CitasGestionComponent
    ],
  templateUrl: './citas-programadas.component.html',
  styleUrl: './citas-programadas.component.scss'
})
export class CitasProgramadasComponent implements OnInit {
ngOnInit(): void {
    initFlowbite();
}
}
