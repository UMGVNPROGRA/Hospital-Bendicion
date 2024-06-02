import { Component, Input, OnInit, inject } from '@angular/core';
import { RecetaComponent } from '../receta/receta.component';
import { CitasComponent } from '../citas/citas.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule, 
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MedicamentosService } from 'app/services/medicamentos.service';
import { NewMedicamentos } from 'app/interfaces/new-medicamentos-interface';
import { Medicamentos } from 'app/interfaces/medicamentos-interface';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [RecetaComponent, CitasComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.scss',
})

export class MedicamentosComponent {
  @Input('id') id: number = 0;
  private readonly _formBuilder = inject(FormBuilder);
  private _medicamentosService = inject(MedicamentosService);
  medicamentoForm!: FormGroup;


  ngOnInit(): void {
    if (this.id==0) {
      this.medicamentoForm = this._formBuilder.group({
        codigo_medicamento: new FormControl('', Validators.required),
        nombre_medicamento: new FormControl('', Validators.required),
        tipo_medida: new FormControl('', Validators.required),
        estado: new FormControl('A', Validators.required),
        tipo_medicamento: new FormControl('B', Validators.required),
      });
    }else{
      this._medicamentosService.getById(this.id).subscribe((data) => { 
        this.medicamentoForm = this._formBuilder.group({
          codigo_medicamento: new FormControl(data.codigo, Validators.required),
          nombre_medicamento: new FormControl(data.nombre_medicamento, Validators.required),
          tipo_medida: new FormControl(data.tipo_medida, Validators.required),
          estado: new FormControl(data.estado, Validators.required),
          tipo_medicamento: new FormControl(data.tipo_medicamento, Validators.required),
        });
      
      })
    }
  }     
    
  
  onSubmitMedicamento() {
    console.log(this.medicamentoForm.value);
    if (this.medicamentoForm.valid) {
      let medicamentos: Medicamentos;
      medicamentos = {
        id_medicamento: 0,
        codigo: this.medicamentoForm.value.codigo_medicamento!,
        nombre_medicamento: this.medicamentoForm.value.nombre_medicamento!,
        tipo_medida: this.medicamentoForm.value.tipo_medida!,
        estado: this.medicamentoForm.value.estado!,
        tipo_medicamento: this.medicamentoForm.value.tipo_medicamento!,
      };

      if(this.id==0){

        this._medicamentosService.postMedicamentos(medicamentos).subscribe({
          next: (response) => {
            console.log('Medicamento enviado exitosamente', response);
            this.medicamentoForm.reset();
            // Manejar la respuesta exitosa
          },
          error: (error) => {
            console.error('Error al enviar nuevo medicamento', error);
            // Manejar el error
          },
        });

      }else {
        
      this._medicamentosService.editarMedicamentos(medicamentos).subscribe({
        next: (response) => {
          console.log('Medicamento editado exitosamente', response);
          this.medicamentoForm.reset();
          // Manejar la respuesta exitosa
        },
        error: (error) => {
          console.error('Error al editar nuevo medicamento', error);
          // Manejar el error
        },
      });
      }

    } else {
      console.warn('Formulario inválido');
    }
  }
  }
