import {Component, inject} from '@angular/core';
import {CitasProgramadasComponent} from "../citas-programadas/citas-programadas.component";
import {CitasGestionComponent} from "../citas-gestion/citas-gestion.component";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {CitasService} from "../../services/citas.service";
import {EnvioCitasInterfaces} from "../../interfaces/envio-citas-interfaces";

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    CitasProgramadasComponent,
    CitasGestionComponent,
    ReactiveFormsModule
  ],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent {
  private readonly _formBuilder =inject(FormBuilder);
  private _citasService = inject(CitasService);
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
}
