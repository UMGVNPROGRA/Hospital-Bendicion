import { Component, inject } from '@angular/core';
import { RecetaComponent } from '../receta/receta.component';
import { CitasComponent } from '../citas/citas.component';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicamentosService } from 'app/services/medicamentos.service';
import { NewMedicamentos } from 'app/interfaces/new-medicamentos-interface';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [RecetaComponent,CitasComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.scss'
})
export class MedicamentosComponent {
  private readonly _formBuilder =inject(FormBuilder);
  private _medicamentosService = inject(MedicamentosService);
  medicamentoForm =this._formBuilder.group(
    {
      codigo_medicamento: new FormControl('', Validators.required),
      nombre_medicamento: new FormControl('', Validators.required),
      tipo_medida: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      tipo_medicamento: new FormControl('', Validators.required)
      }
  );

  onSubmitMedicamento(){
    console.table(this.medicamentoForm.value)
    if (this.medicamentoForm.valid) {
      let medicamentos: NewMedicamentos;
      medicamentos = {
        codigo_medicamento: this.medicamentoForm.value.codigo_medicamento!,
        nombre_medicamento: this.medicamentoForm.value.nombre_medicamento!,
        tipo_medida: this.medicamentoForm.value.tipo_medida!,
        estado: this.medicamentoForm.value.estado!,
        tipo_medicamento: this.medicamentoForm.value.tipo_medicamento!
      };

      this._medicamentosService.postMedicamentos(medicamentos).subscribe({
        next: response => {
          console.log('Medicamento enviado exitosamente', response);
          // Manejar la respuesta exitosa
        },
        error: error => {
          console.error('Error al enviar nuevo medicamento', error);
          // Manejar el error
        }
      });
    } else {
      console.warn('Formulario inválido');
    }
  }
}
