import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { CitasI } from '../modelos/citas.interface';
import { RecetaService } from 'app/services/receta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss'
})
export class RecetaComponent implements OnInit {
  citas: CitasI | undefined;
  idMed: number = 0;
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
  this.recetasSrv.getcitasById(8).subscribe((data) => {
    //console.log(data);
    this.citas = data;
    console.log(this.citas);
  });
  };

  cargaMedi() {
    this.recetasSrv.getcitasMedicamentoByCod("ASP","A").subscribe((data) => {
      //console.log(data);
      this.citas = data;
      console.log(this.citas);
    });
    };
}


