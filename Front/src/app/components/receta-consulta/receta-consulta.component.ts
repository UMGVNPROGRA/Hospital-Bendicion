import { Component, Input, OnInit, inject } from '@angular/core';
import { RecetasConsulta } from 'app/interfaces/recetas';
import { RecetaService } from 'app/services/receta.service';

@Component({
  selector: 'app-receta-consulta',
  standalone: true,
  imports: [],
  templateUrl: './receta-consulta.component.html',
  styleUrl: './receta-consulta.component.scss'
})
export class RecetaConsultaComponent implements OnInit {
  private recetasSrv = inject(RecetaService);
  arrayrece: RecetasConsulta[] = []
  ngOnInit(): void {
      this.recetas()
  }
  recetas() {
    this.recetasSrv.getRecetaByMed(18,7).subscribe((data) => {
      this.arrayrece = data;
    });
  };
}
