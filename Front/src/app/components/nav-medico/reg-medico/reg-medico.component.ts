import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Especialidad, MedicoRequest } from 'app/interfaces/MedicoRequest';
import { EspecialidadesInterfaces } from 'app/interfaces/especialidades-interfaces';
import { EspecialidadService } from 'app/services/especialidad.service';
import { MedicosService } from 'app/services/medicos.service';

@Component({
  selector: 'app-reg-medico',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reg-medico.component.html',
  styleUrl: './reg-medico.component.scss'
})
export class RegMedicoComponent implements OnInit{

  private _apiService = inject(EspecialidadService);
  private _medicosService = inject(MedicosService);

  private fb = inject(FormBuilder);
  especialidades: EspecialidadesInterfaces[] = [];

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.obtenerEspecialidades();
  }

  initializeForm(): void {
  }
  form: FormGroup  = this.fb.group({
    nombre_medico: ['', Validators.required],
    apellido_medico: ['', Validators.required],
    especialidad: ['', Validators.required],
    id_usuario: [''],
    telefono: ['', Validators.required],
    jornada: ['', Validators.required],
    cod_jefe_inmediato: ['', Validators.required],
    colegiado: ['', Validators.required],
    fechaCreacion: [''],
    direccion: ['', Validators.required],
    centro_hospitalario: ['', Validators.required],
    edad: ['', Validators.required],
    observaciones: ['', Validators.required]
  });

  get nombre_medico() {
    return this.form.controls['nombre_medico'];
  }
  get apellido_medico() {
    return this.form.controls['apellido_medico'];
  }

  get id_usuario() {
    return this.form.controls['id_usuario'];
  }

  get telefono() {
    return this.form.controls['telefono'];
  }

  get jornada() {
    return this.form.controls['jornada'];
  }

  get cod_jefe_inmediato() {
    return this.form.controls['cod_jefe_inmediato'];
  }

  get colegiado() {
    return this.form.controls['colegiado'];
  }

  get fechaCreacion() {
    return this.form.controls['fechaCreacion'];
  }
  get edad() {
    return this.form.controls['edad'];
  }
  get centro_hospitalario() {
    return this.form.controls['centro_hospitalario'];
  }

  get direccion() {
    return this.form.controls['direccion'];
  }
  get observaciones() {
    return this.form.controls['observaciones'];
  }



  onSubmitMedico(): void {
    if (this.form.valid) {
      const medicoData = {
        username: this.form.value.username,

        nombre_medico: this.form.value.nombre_medico,
        apellido_medico: this.form.value.apellido_medico,
        especialidad:{
        id_especialidad: this.form.value.especialidad

        },
        id_usuario: this.form.value.id_usuario,
        telefono: this.form.value.telefono,
        jornada: this.form.value.jornada,
        cod_jefe_inmediato: this.form.value.cod_jefe_inmediato,
        colegiado: this.form.value.colegiado,
        fechaCreacion: this.form.value.fechaCreacion,
        direccion: this.form.value.direccion,
        centro_hospitalario: this.form.value.centro_hospitalario,
        edad: this.form.value.edad,
        observaciones: this.form.value.observaciones
      };

      this._medicosService.postUser(medicoData).subscribe(
        response => {
          console.log('Registro exitoso:', response);
          // Redireccionar o mostrar mensaje de éxito
          this.router.navigate(['/administrador/medico']);
        },
        error => {
          console.error('Error en el registro:', error);
          // Mostrar mensaje de error
        }
      );
    } else {
      console.error('El formulario no es válido. Por favor, verifica los campos.');
    }
  }
//especialidades
  obtenerEspecialidades(): void {

    this._apiService.getEspecialidades().subscribe((especialidad: EspecialidadesInterfaces[]) => {
      console.log("especialidades")
      console.log(especialidad);
      this.especialidades = especialidad;
    });
    //this.especialidades = [];
  }
  selectEspecialidad(event: Event): void {
    const selectedEspecialidadId = (event.target as HTMLSelectElement).value;
    this.form.patchValue({
      especialidad: selectedEspecialidadId

    });
    console.log(selectedEspecialidadId);
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
