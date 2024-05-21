import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export default class  LandingComponent {

  formData: any = {};
  pacientes = [
    { id: 1, nombre: 'Paciente 1' },
    { id: 2, nombre: 'Paciente 2' }
    // Agrega más pacientes según sea necesario
  ];
  usuarios = [
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' }
    // Agrega más usuarios según sea necesario
  ];
  medicos = [
    { id: 1, nombre: 'Médico 1' },
    { id: 2, nombre: 'Médico 2' }
    // Agrega más médicos según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Aquí implementarías la lógica para enviar los datos del formulario
    console.log(this.formData);
  }

}
