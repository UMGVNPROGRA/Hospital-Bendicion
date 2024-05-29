import { Component } from '@angular/core';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss'
})
export class RecetaComponent {
  constructor(private serviceLogin: LoginService) {

  }

tipoConsulta(){
  if(this.serviceLogin.userRoleValue==='administrador'){
    
  }

}

}
