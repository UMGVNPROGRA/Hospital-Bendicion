import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Especialidad, MedicoRequest } from 'app/interfaces/MedicoRequest';
import { EspecialidadesInterfaces } from 'app/interfaces/especialidades-interfaces';

@Component({
  selector: 'app-reg-medico',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reg-medico.component.html',
  styleUrl: './reg-medico.component.scss'
})
export class RegMedicoComponent implements OnInit{
  medicoForm: FormGroup = this.fb.group({});
  especialidades: EspecialidadesInterfaces[] = [];

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.obtenerEspecialidades();
  }

  initializeForm(): void {
    this.medicoForm = this.fb.group({
      nombre_medico: ['', Validators.required],
      apellido_medico: ['', Validators.required],
      especialidad: ['', Validators.required],
      id_usuario: ['', Validators.required],
      telefono: ['', Validators.required],
      jornada: ['', Validators.required],
      cod_jefe_inmediato: ['', Validators.required],
      colegiado: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      direccion: ['', Validators.required],
      centro_hospitalario: ['', Validators.required],
      edad: ['', Validators.required],
      observaciones: ['', Validators.required]
    });
  }

  onSubmitMedico(): void {
    if (this.medicoForm.valid) {
      const medicoData: MedicoRequest = this.medicoForm.value;

      console.log('Datos del médico a registrar:', medicoData);
    } else {

      console.error('El formulario no es válido. Por favor, verifica los campos.');
    }
  }

  obtenerEspecialidades(): void {

    this.especialidades = [];
  }

  regMedico() {
    this.router.navigate(['/administrador/regmedico']);

  }
  viewMedico() {
    this.router.navigate(['/administrador/medico']);

  }
  updateMedico() {
    this.router.navigate(['/administrador/updateuser']);
  }

}
