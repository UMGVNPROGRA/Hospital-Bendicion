import { Component,inject } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { NewPacienteInterface } from 'app/interfaces/new-paciente-interface';
import { PacienteService } from 'app/services/paciente.service';

@Component({  
  selector: 'app-paciente',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent{
  private readonly _formBuilder =inject(FormBuilder);
  private _pacienteService = inject(PacienteService);
  pacienteForm =this._formBuilder.group(
    {
      nit: new FormControl('', Validators.required),
      dpi: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      estado: new FormControl('A'),
      id_usuario: new FormControl(0, Validators.required),
      }
  );

  onSubmitPaciente(){
    console.table(this.pacienteForm.value)
    if (this.pacienteForm.valid) {
      let paciente: NewPacienteInterface;
      paciente = {
        nit: this.pacienteForm.value.nit!,
        dpi: this.pacienteForm.value.dpi!,
        fecha_nacimiento: this.pacienteForm.value.fecha_nacimiento!,
        direccion: this.pacienteForm.value.direccion!,
        telefono: this.pacienteForm.value.telefono!,
        email: this.pacienteForm.value.email!,
        genero: this.pacienteForm.value.genero!,
        estado: this.pacienteForm.value.estado!,
        id_usuario: this.pacienteForm.value.id_usuario!
      };

      this._pacienteService.postPaciente(paciente).subscribe({
        next: response => {
          console.log('Paciente enviado exitosamente', response);
          // Manejar la respuesta exitosa
        },
        error: error => {
          console.error('Error al enviar nuevo paciente', error);
          // Manejar el error
        }
      });
    } else {
      console.warn('Formulario inválido');
    }
  }
}