import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MedicoInterfaces } from 'app/interfaces/medico-interfaces';
import { MedicosService } from 'app/services/medicos.service';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink],
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.scss'
})
export class MedicoComponent implements OnInit {


  constructor(private router: Router, private service: MedicosService) { }

  medList: MedicoInterfaces[] = [];

  private _apiService = inject(MedicosService);

  ngOnInit(): void {
    this._apiService.getMedicos().subscribe((data: MedicoInterfaces[]) => {
      console.log("datos obtenidos de spring boot");
      console.log(data);
      this.medList = data;
    })

  }

  regMedico() {
    this.router.navigate(['/administrador/regmedico']);

  }
  viewMedico() {
    this.router.navigate(['/administrador/medico']);

  }
  updateMedico() {
    this.router.navigate(['/administrador/updateuser']);
  }



}
