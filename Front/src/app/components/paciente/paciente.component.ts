import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewPacienteInterface } from 'app/interfaces/new-paciente-interface';
import { UsuarioInterfaces } from 'app/interfaces/usuario-interfaces';
import { PacienteService } from 'app/services/paciente.service';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss',
})
export class PacienteComponent implements OnInit {
  private readonly _formBuilder = inject(FormBuilder);
  private _pacienteService = inject(PacienteService);
  private usuariosService = inject(UsuarioService);
  @Input('id') id: number = 0;
  usuarios: UsuarioInterfaces[] | undefined;
  pacienteForm!: FormGroup;
  ngOnInit(): void {
    this.getUSuarios()
    if (this.id == 0) {

      this.pacienteForm = this._formBuilder.group({
        nit: new FormControl(''),
        dpi: new FormControl(''),
        fecha_nacimiento: new FormControl('', Validators.required),
        direccion: new FormControl('', Validators.required),
        telefono: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        genero: new FormControl('', Validators.required),
        estado: new FormControl('A'),
        id_usuario: new FormControl('', Validators.required),
      });
    } else {
      this._pacienteService.getPacienteById(this.id).subscribe((data) => {
        this.pacienteForm = this._formBuilder.group({
          id_paciente: new FormControl(data.id_paciente, Validators.required),
          nit: new FormControl(data.nit),
          dpi: new FormControl(data.dpi),
          fecha_nacimiento: new FormControl(
            data.fecha_nacimiento,
            Validators.required
          ),
          direccion: new FormControl(data.direccion, Validators.required),
          telefono: new FormControl(data.telefono, Validators.required),
          email: new FormControl(data.email, Validators.required),
          genero: new FormControl(data.genero, Validators.required),
          estado: new FormControl(data.estado),
          id_usuario: new FormControl(
            data.usuario.idUsuario,
            Validators.required
          ),
        });
      });
    }
  }
  getUSuarios() {
    this.usuariosService.getUsers().subscribe((data) => (this.usuarios = data));
  }
  onSubmitPaciente() {
    console.log('entre a paciente');

    console.table(this.pacienteForm.value);
    let pacienteId: number = 0;
    if (this.id != 0) {
      pacienteId = this.pacienteForm.value.id_paciente;
    }
    if (
      this.pacienteForm.value.nit === '' &&
      this.pacienteForm.value.dpi === ''
    ) {
      console.log('ingrese nit o dpi');
      return;
    }
    if (this.pacienteForm.value.nit === '' && this.pacienteForm.value.dpi) {
      this.pacienteForm.value.nit = 'CF';
    }

    if (this.pacienteForm.value.nit && this.pacienteForm.value.dpi === '') {
      this.pacienteForm.value.dpi = 'SD';
      return;
    }
    if (this.pacienteForm.valid) {
      let paciente: NewPacienteInterface;
      paciente = {
        id_paciente: pacienteId,
        nit: this.pacienteForm.value.nit!,
        dpi: this.pacienteForm.value.dpi!,
        fecha_nacimiento: this.pacienteForm.value.fecha_nacimiento!,
        direccion: this.pacienteForm.value.direccion!,
        telefono: this.pacienteForm.value.telefono!,
        email: this.pacienteForm.value.email!,
        genero: this.pacienteForm.value.genero!,
        estado: this.pacienteForm.value.estado!,
        id_usuario: this.pacienteForm.value.id_usuario!,
      };

      this._pacienteService.postPaciente(paciente).subscribe({
        next: response => {
          console.log('Paciente enviado exitosamente', response.data);
          if (this.id == 0) {
            
            // Manejar la respuesta exitosa
          } else {
            console.log('Paciente Editar exitosamente', response);
          }
        },
        error: (error) => {
          if (this.id == 0) {
            console.error('Error al enviar nuevo paciente', error);
            // Manejar el error
          } else {
            console.error('Error al editar nuevo paciente', error);
          }
        },
      });
    } else {
      console.warn('Formulario inválido');
    }
  }
}
