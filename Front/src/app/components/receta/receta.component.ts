import { Component, Input, OnInit, inject } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { CitasI } from '../modelos/citas.interface';
import { RecetaService } from 'app/services/receta.service';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitasInterfaces } from 'app/interfaces/citas-interfaces';
import { Medicamentos, MedicamentosReceta } from 'app/interfaces/medicamentos-interface';
@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss'
})
export class RecetaComponent implements OnInit {
  citas: CitasInterfaces | undefined;
  idCita: number = 0;

  medicamento: MedicamentosReceta | undefined;
  idMed: string = "";
  descripcion: string = "";

  arrayMed: MedicamentosReceta[] = []
  recetaForm!: FormGroup;

  agregarMed() {
    if (this.medicamento) {
      console.log(this.medicamento.id_medicamento)

      this.agregarDetalle(this.medicamento.id_medicamento, this.medicamento.nombre_medicamento, this.descripcion)
    }

  }

  private recetasSrv = inject(RecetaService);
  private fb = inject(FormBuilder);

  constructor(private serviceLogin: LoginService) {

  }



  ngOnInit() {
    //this.cargaCitas(1);
    this.recetaForm = this.fb.group({
      idCit: ['',Validators.required],

      detalle: ['', Validators.required],
    });
    this.recetaForm.patchValue({
      detalle: this.arrayMed
    });
  }

  agregarDetalle(id: number, nom: String, des: string) {
    if (this.medicamento) {
      this.medicamento.descripcionRecta = this.descripcion
      this.arrayMed.push(this.medicamento);
    }
    console.log("DATOS", this.recetaForm.value);

  }


  cargaCitas(id: number) {
    this.recetasSrv.getcitasById(id).subscribe((data) => {

      console.log(id);
      this.citas = data;
      console.log(this.citas);
    });
  };

  cargaMedi(cod: string) {
    this.recetasSrv.getcitasMedicamentoByCod(cod, "A").subscribe((data) => {
      //console.log(data);
      this.medicamento = data;
      console.log(this.medicamento);
    });
  };

  finalizar(){
   let pr = this.recetaForm.get('idCit')?.setValue(this.citas?.id_cita)
    console.log(this.recetaForm.value)
    
    this.recetasSrv.saveReceta(this.recetaForm.value).subscribe({
      next: response => {
        console.log('Receta Guardada', response);
      },
      error: error => {
        console.error('Error al guardar Receta', error);
      }
    });
  }

}


