import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { ApiService } from 'app/servicios/api.service';
import { CitasI } from '../modelos/citas.interface';
import { RecetaService } from 'app/services/receta.service';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss'
})
export class RecetaComponent implements OnInit {
  citas: CitasI | undefined;
  citaBuscada: any;
  private recetasSrv = inject(RecetaService);

  constructor(private serviceLogin: LoginService) {

  }

  ngOnInit() {
    //this.cargaCitas(1);
  }

tipoConsulta(){
  if(this.serviceLogin.userRoleValue==='administrador'){
    
  }

}

cargaCitas(id:number) {
  this.recetasSrv.getcitasById(8).subscribe({
    next: response => {
      console.log('Cita enviada exitosamente', response);
      // Manejar la respuesta exitosa
    },
    error: error => {
      console.error('Error al enviar la cita', error);
      // Manejar el error
    }
  });
  };

  
}


