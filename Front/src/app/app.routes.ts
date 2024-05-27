import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {CitasComponent} from "./components/citas/citas.component";
import { FacturaComponent } from './components/factura/factura.component';
import { RecetaComponent } from './components/receta/receta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import {CitasProgramadasComponent} from "./components/citas-programadas/citas-programadas.component";
import { Component } from '@angular/core';
import { HistorialComponent } from './components/historial/historial.component';
import { MedicoComponent } from './components/medico/medico.component';
import { MenuAdministradorComponent } from './components/menu-principal/menu-administrador/menu-administrador.component';
import { MenuSecretariaComponent } from './components/menu-principal/menu-secretaria/menu-secretaria.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
    {
        path:'index',
        loadComponent:()=>import('./components/layout/landing/landing.component'),
    },
    {path:'login', component:LoginComponent},
    {path:'citas', component:CitasComponent},
    {path:'usuarios', component:UsuarioComponent},
    {path:'paciente', component:PacienteComponent},

    {path:'recetas', component:RecetaComponent},
    {path:'citasprogramadas', component:CitasProgramadasComponent},

    {path:'historial', component:HistorialComponent},

    {path:'medico',component:MedicoComponent},
    {path:'administrador',component:MenuAdministradorComponent},
    {path:'secretaria',component:MenuSecretariaComponent},
    {path:'factura', component:FacturaComponent},

    {path: '', redirectTo: 'index',pathMatch: 'full'},
    {path: '**',redirectTo: 'index',pathMatch: 'full'},
];
