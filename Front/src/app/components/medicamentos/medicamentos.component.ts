import { Component } from '@angular/core';
import { RecetaComponent } from '../receta/receta.component';
import { CitasComponent } from '../citas/citas.component';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [RecetaComponent,CitasComponent],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.scss'
})
export class MedicamentosComponent {

}
