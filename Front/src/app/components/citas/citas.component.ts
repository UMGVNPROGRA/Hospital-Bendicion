import {Component, inject, OnInit} from '@angular/core';
import {CitasProgramadasComponent} from "../citas-programadas/citas-programadas.component";
import {CitasGestionComponent} from "../citas-gestion/citas-gestion.component";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {CitasService} from "../../services/citas.service";
import {EnvioCitasInterfaces} from "../../interfaces/envio-citas-interfaces";
import {EspecialidadService} from "../../services/especialidad.service";
import {DatePipe, JsonPipe} from "@angular/common";
import {Observable, of} from "rxjs";
import {EspecialidadesInterfaces} from "../../interfaces/especialidades-interfaces";
import {PacienteInterfaces} from "../../interfaces/paciente-interfaces";
import {PacienteService} from "../../services/paciente.service";
import {UsuarioInterfaces} from "../../interfaces/usuario-interfaces";
import {UsuarioService} from "../../services/usuario.service";
import {MedicosService} from "../../services/medicos.service";
import {MedicoInterfaces} from "../../interfaces/medico-interfaces";

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    CitasProgramadasComponent,
    CitasGestionComponent,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent implements OnInit{

  pacientes: PacienteInterfaces[] | undefined;

  usuarios: UsuarioInterfaces[] | undefined;

  medicos: MedicoInterfaces[] | undefined;

  mostrarBannerExito: boolean = false;


  constructor(private pacientesService: PacienteService,
              private usuariosService: UsuarioService,
              private medicosService:MedicosService,
              private datePipe: DatePipe
              ) {
  }

  private readonly _formBuilder =inject(FormBuilder);
  private _citasService = inject(CitasService);
  private _especialidadesService = inject(EspecialidadService)
  private _respuesta: Observable<EspecialidadesInterfaces[]> = of([]);
  citasForm =this._formBuilder.group(
    {
      id_paciente: new FormControl(0, Validators.required),
      fecha_cita: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      id_usuario: new FormControl(0, Validators.required),
      id_medico: new FormControl(0, Validators.required),
      estado: new FormControl('A'),
      }
  );

  onSubmitCita(){
    console.table(this.citasForm.value)
    if (this.citasForm.valid) {
      let cita: EnvioCitasInterfaces;
      cita = {
        id_paciente: this.citasForm.value.id_paciente!,
        fecha_cita: this.citasForm.value.fecha_cita!,
        descripcion: this.citasForm.value.descripcion!,
        id_usuario: this.citasForm.value.id_usuario!,
        id_medico: this.citasForm.value.id_medico!,
        estado: this.citasForm.value.estado!
      };

      this._citasService.postCita(cita).subscribe({
        next: response => {
          console.log('Cita enviada exitosamente', response);
          // Manejar la respuesta exitosa
          this.citasForm.reset()
          this.mostrarBannerExito = true;
          setTimeout(() => {
            this.mostrarBannerExito = false;
          }, 1000);
        },
        error: error => {
          console.error('Error al enviar la cita', error);
          // Manejar el error
        }
      });
    } else {
      console.warn('Formulario inválido');
    }
  }

  getPacientes(){
    this.pacientesService.getPaciente().subscribe(data => {
      this.pacientes = data
    })
  }

  getUSuarios() {
    this.usuariosService.getUsers().subscribe(data=>
    this.usuarios = data)
  }

  getMedicos() {
    this.medicosService.getMedicos().subscribe(data => {
      this.medicos = data
    })
   }


  ngOnInit() {
    this.getPacientes()
    this.getUSuarios()
    this.getMedicos()
  }
}
