import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-secretaria',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './menu-secretaria.component.html',
  styleUrl: './menu-secretaria.component.scss'
})
export class MenuSecretariaComponent {

}
