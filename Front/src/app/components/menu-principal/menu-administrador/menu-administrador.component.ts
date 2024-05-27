import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-menu-administrador',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './menu-administrador.component.html',
  styleUrl: './menu-administrador.component.scss'
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private router: Router, private service: LoginService ){}
  ngOnInit(): void {

  }

  logout(){
    this.service.logout()
    this.router.navigate(['/secretaria']);
  }

  modUser(){
    this.router.navigate(['/usuarios']);

  }


}
