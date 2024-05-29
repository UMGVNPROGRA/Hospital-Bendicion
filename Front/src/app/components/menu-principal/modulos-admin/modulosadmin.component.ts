import { Component } from '@angular/core';
import { MenuAdministradorComponent } from "../menu-administrador/menu-administrador.component";
import { UsuarioComponent } from "../../usuario/usuario.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modulosadmin',
    standalone: true,
    templateUrl: './modulosadmin.component.html',
    styleUrl: './modulosadmin.component.scss',
    imports: [MenuAdministradorComponent, UsuarioComponent,RouterOutlet, CommonModule, RouterLink]
})
export class ModulosadminComponent {

}
