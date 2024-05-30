import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/servicios/api.service';
import { CitasI } from '../modelos/citas.interface';
import { CommonModule, NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CommonModule, NgFor,FormsModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.scss',
})
export class FacturaComponent implements OnInit {
  citas: CitasI[] | undefined;
  filaSeleccionado: any;
  nombre_paciente:any;
  nombre_medico:any;
  direccion:any;
  fecha:any;
  descripcion:any;
  email:any;


  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.cargaCitas();
    this.nombre_paciente="";
    this.nombre_medico="";
    this.direccion="";
    this.fecha="";
    this.descripcion="";
    this.email="";
  }

  mostrarDatos() {
   
    this.nombre_paciente=this.filaSeleccionado.paciente.nombre;
    this.nombre_medico=this.filaSeleccionado.id_medico.nombre_medico;
    this.direccion=this.filaSeleccionado.paciente.direccion;
    this.fecha=this.filaSeleccionado.fecha_cita;
    this.descripcion=this.filaSeleccionado.descripcion;
    this.email=this.filaSeleccionado.paciente.email;
  }

  cargaCitas() {
    this.api.ListadoCitas().subscribe((data) => {
      //console.log(data);
      this.citas = data;
      console.log(this.citas);
    });
  }
}
