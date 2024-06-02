import { Component, Input, OnInit, inject, input } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { RecetaService } from 'app/services/receta.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CitasInterfaces } from 'app/interfaces/citas-interfaces';
import {
  MedicamentosReceta,
} from 'app/interfaces/medicamentos-interface';
import { Detalle, RecetasConsulta, RecetasConsultaEditar } from 'app/interfaces/recetas';
@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss',
})
export class RecetaComponent implements OnInit {
  citas: CitasInterfaces | undefined;
  idCita: number = 0;
  @Input('id') id: number = 0;
  medicamento: MedicamentosReceta | undefined;
  idMed: string = '';
  descripcion: string = '';

  arrayMed: MedicamentosReceta[] = [];
  arrayIdMed: number[] = [];
  arrayDes: String[] = [];
  recetaForm!: FormGroup;
  receta!: RecetasConsultaEditar;
  detalle!: Detalle[]

  agregarMed() {
    if (this.medicamento) {
      console.log(this.medicamento.id_medicamento);

      this.agregarDetalle(
        this.medicamento.id_medicamento,
        this.medicamento.nombre_medicamento,
        this.descripcion
      );
    }
  }

  private recetasSrv = inject(RecetaService);
  private fb = inject(FormBuilder);

  constructor(private serviceLogin: LoginService) {

  }

  ngOnInit() {
    console.log('recibo', this.id);
    //this.cargaCitas(1);
    if (this.id==0) {
      this.recetaForm = this.fb.group({
        id_cita: ['', Validators.required],
        id_medicamento: ['', Validators.required],
        descripcion: ['', Validators.required],
      });
    } else {
      console.log('estoy aqui');
      this.recetasSrv.getRecetaEditar(this.id).subscribe((data) => {

        this.idCita = data[0].id_cita;
       this.receta = {
        "id_receta": this.id,
        "id_cita":  this.idCita,
        "fecha": data[0].fecha,
        "nombre": data[0].nombre,
        "nombre_medico": data[0].nombre_medico,
        "detalle": this.detalle
       }

       console.log('esto tiene el detalle', this.receta);
        this.recetaForm = this.fb.group({
          id_cita: [data[0].id_cita, Validators.required],
          id_medicamento: ['', Validators.required],
          descripcion: ['', Validators.required],
        });

        data[0].detalle.forEach((element) => {
          this.medicamento = {
            "id_medicamento": element.id_medicamento,
            "codigo_medicamento": "",
            "nombre_medicamento": element.nombre_medicamento,
            "tipo_medicamento": "",
            "descripcionRecta": element.descripcion
          }
          this.arrayMed.push(this.medicamento)

        });
        this.arrayMed.forEach((med) => {
          this.arrayIdMed.push(med.id_medicamento);
        });

        this.arrayMed.forEach((med) => {
          this.arrayDes.push(med.descripcionRecta);
        });
       console.log('esto tiene el arrayMed', this.arrayIdMed);




        console.log(this.recetaForm.value);
        console.log(this.citas);
      });
    }



    this.recetaForm.patchValue({
      id_medicamento: this.arrayIdMed,
    });

    this.recetaForm.patchValue({
      descripcion: this.arrayDes,
    });
  }


  eliminarDetalle(index: number) {
    console.log("Elimiando", index)
    this.arrayMed.splice(index,1);

    console.log("Elimiando", this.arrayMed)

}

  agregarDetalle(id: number, nom: String, des: string) {
    if (this.medicamento) {
      this.medicamento.descripcionRecta = this.descripcion;
      this.arrayMed.push(this.medicamento);
    }
    console.log('DATOS', this.recetaForm.value);
  }

  cargaCitas(id: number) {
    this.recetasSrv.getcitasById(id).subscribe((data) => {
      console.log(id);
      this.citas = data;
      this.recetaForm.patchValue({
        id_cita: data.id_cita,
      });
      console.log(this.recetaForm.value);
      console.log(this.citas);
    });
  }

  cargaMedi(cod: string) {
    this.recetasSrv.getcitasMedicamentoByCod(cod, 'A').subscribe((data) => {
      //console.log(data);
      this.medicamento = data;
      console.log(this.medicamento);
    });
  }

  finalizar() {
    this.arrayMed.forEach((med) => {
      this.arrayIdMed.push(med.id_medicamento);
    });

    this.arrayMed.forEach((med) => {
      this.arrayDes.push(med.descripcionRecta);
    });

    console.log(this.recetaForm.value);

    if(this.id==0){
      console.log("Esto mandos",this.recetaForm.value);
      this.recetasSrv.saveReceta(this.recetaForm.value).subscribe({
        next: (response) => {
          console.log('Receta Guardada', response);
        },
        error: (error) => {
          console.error('Error al guardar Receta', error);
        },
      });

    }else {
      console.log("Esto mando",this.recetaForm.value);
      this.recetasSrv.Editar(this.id,this.recetaForm.value).subscribe({
        next: (response) => {
          console.log('Receta Editada', response);
        },
        error: (error) => {
          console.error('Error al editar Receta', error);
        },
      });

    }

  }
}
