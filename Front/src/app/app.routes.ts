import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {CitasComponent} from "./components/citas/citas.component";
import { PacienteComponent } from './components/paciente/paciente.component';

export const routes: Routes = [
    {
        path:'index',
        loadComponent:()=>import('./components/layout/landing/landing.component'),
    },
    {path:'login', component:LoginComponent},
    {path:'citas', component:CitasComponent},
    {path:'paciente', component:PacienteComponent},

    {path: '', redirectTo: 'index',pathMatch: 'full'},
    {path: '**',redirectTo: 'index',pathMatch: 'full'},
];
