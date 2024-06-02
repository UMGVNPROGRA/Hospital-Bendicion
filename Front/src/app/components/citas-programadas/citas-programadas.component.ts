import {Component, OnInit} from '@angular/core';
import {CitasGestionComponent} from "../citas-gestion/citas-gestion.component";
import {CitasService} from "../../services/citas.service";
import {CitasInterfaces} from "../../interfaces/citas-interfaces";
import {initFlowbite} from "flowbite";
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MedicosService} from "../../services/medicos.service";
import {MedicoInterfaces} from "../../interfaces/medico-interfaces";

@Component({
  selector: 'app-citas-programadas',
  standalone: true,
  imports: [
    CitasGestionComponent,
    DatePipe,
    FormsModule
  ],
  templateUrl: './citas-programadas.component.html',
  styleUrl: './citas-programadas.component.scss'
})
export class CitasProgramadasComponent implements OnInit {

  constructor(private service: CitasService,
              private medicosSeervice: MedicosService) {}
  citas: CitasInterfaces[] | undefined;
  medicos: MedicoInterfaces[] | undefined;
  idMedicoSelec: string | null = null;
  citaSelect: string | null = null;

  ngOnInit() {
    initFlowbite();
    this.getCitas();
    this.getMedicos();
  }

  getCitas() {
    this.service.getcitas().subscribe(data => {
      this.citas = data;
    })
  }

  getMedicos () {
    this.medicosSeervice.getMedicos().subscribe(data =>{
      this.medicos = data;
    })
  }

  getCitasByMedico(id: string) {
    if (id=="0"){
      this.getCitas();
    }
    else {
      this.service.getcitasByMedico(id).subscribe(data =>
      this.citas=data);}

    console.log(id)
  }

  onChangeMedico(event: any) {
    this.idMedicoSelec = event.target.value;
    if(this.idMedicoSelec){
      this.getCitasByMedico(this.idMedicoSelec)
    }
  }

  onPendiente(id: number) {
    console.log(id)
    if (confirm('¿Desea colocar en pendiente?')) {
      console.log('true')
    }
  }

  onCancelar(id: number) {
    console.log(id)
    if (confirm('¿Desea cancelar?')){
      console.log('true')
    }
  }

}
