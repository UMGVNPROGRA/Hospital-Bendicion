import { Component, Input, OnInit, inject, input } from '@angular/core';
import { Recetas, RecetasConsulta } from 'app/interfaces/recetas';
import { LoginService } from 'app/services/login.service';
import { RecetaService } from 'app/services/receta.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-receta-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './receta-consulta.component.html',
  styleUrl: './receta-consulta.component.scss'
})
export class RecetaConsultaComponent implements OnInit {
  private recetasSrv = inject(RecetaService);


  arrayrece: RecetasConsulta[] = []
  arrayInicio: RecetasConsulta[] = []
  
  idReceta: number = 0;
  
  ngOnInit(): void {
      this.recetas()
  }

  recetas() {
    this.recetasSrv.getRecetas().subscribe((data) => {
      this.arrayInicio = data;
      this.arrayInicio.forEach(element => {
       // if(element.fecha){
         // element.fecha = this.datePipe.transform(element.fecha, 'dd/MM/yyyy');
        //}
      });
    });
  };

  
  buscarRecetas() {
    this.recetasSrv.getRecetaByMed(this.idReceta).subscribe((data) => {
      this.arrayrece = data;
    });
  };
}
