import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/servicios/api.service';
import { CitasI } from '../modelos/citas.interface';
import { CommonModule, NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.scss',
})
export class FacturaComponent implements OnInit {
  citas: CitasI[] | undefined;
  filaSeleccionado: any;
  nombre_paciente: any;
  nombre_medico: any;
  direccion: any;
  fecha: any;
  descripcion: any;
  email: any;
  total: any;
  subtotal: any;
  isDisabled: any;
  nit: any;

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.cargaCitas();
    this.nombre_paciente = '';
    this.nombre_medico = '';
    this.direccion = '';
    this.fecha = '';
    //this.descripcion = '';
    this.email = '';
    this.total = 0.0;
    this.isDisabled = true;
    this.nit = '';
  }

  calculoSubTotal() {
    console.log(this.total);
    var subtotal_temp = 0.0;

    subtotal_temp = this.total / 1.12;

    subtotal_temp = Number(subtotal_temp.toFixed(2));

    console.log(subtotal_temp);

    this.subtotal = subtotal_temp;
  }

  CrearFactura() {
    if (this.total == 0.0 || this.nombre_medico == '') {
    } else {
      if (this.nit == '') {
        this.nit = 'CF';
      }
      var usuario = {
        id_cita: this.filaSeleccionado.id_cita,
        nit: this.nit,
        total: this.total
      };

      console.log(usuario);

      this.api.CrearFactura(usuario).subscribe(async data => {
        var respuesta = data;
        console.log('completo');
        this.limpiarDatos();
        /*
        if (respuesta.resultado == "1") {
          //localStorage.clear();
        
        } else {
        
        }
        */


      });

    }
  }

  limpiarDatos() {
    this.nombre_paciente = '';
    this.nombre_medico = '';
    this.direccion = '';
    this.fecha = '';
    //this.descripcion = '';
    this.email = '';
    this.total = 0;
    this.subtotal = 0.0;
    this.isDisabled = true;
    this.nit = '';
  }

  mostrarDatos() {
    this.nombre_paciente = this.filaSeleccionado.paciente.nombre;
    this.nombre_medico = this.filaSeleccionado.id_medico.nombre_medico;
    this.direccion = this.filaSeleccionado.paciente.direccion;
    this.fecha = this.filaSeleccionado.fecha_cita;
    this.descripcion = this.filaSeleccionado.descripcion;
    this.email = this.filaSeleccionado.paciente.email;
    this.isDisabled = false;
  }

  cargaCitas() {
    this.api.ListadoCitas().subscribe((data) => {
      //console.log(data);
      this.citas = data;
      console.log(this.citas);
    });
  }
}
