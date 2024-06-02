import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Medicamentos } from 'app/interfaces/medicamentos-interface';
import { MedicamentosService } from 'app/services/medicamentos.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-medicamentos-consultar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medicamentos-consultar.component.html',
  styleUrl: './medicamentos-consultar.component.scss'
})
export class MedicamentosConsultarComponent {
  private service = inject(MedicamentosService);

  medicamento: Medicamentos [] = []

  ngOnInit(): void {
    initFlowbite();

    this.getMedicamento();   
  }

  getMedicamento() {
    this.service.getMedicamentos().subscribe((data) => {
        this.medicamento = data;
        console.log(data)
      });
    }
}
