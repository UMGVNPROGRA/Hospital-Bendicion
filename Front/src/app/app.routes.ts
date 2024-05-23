import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {CitasComponent} from "./components/citas/citas.component";

import { RecetaComponent } from './components/receta/receta.component';

import {CitasProgramadasComponent} from "./components/citas-programadas/citas-programadas.component";
import { Component } from '@angular/core';
import { HistorialComponent } from './components/historial/historial.component';
import { MedicoComponent } from './components/medico/medico.component';

export const routes: Routes = [
    {
        path:'index',
        loadComponent:()=>import('./components/layout/landing/landing.component'),
    },
    {path:'login', component:LoginComponent},
    {path:'citas', component:CitasComponent},

    {path:'recetas', component:RecetaComponent},
    {path:'citasprogramadas', component:CitasProgramadasComponent},

    {path:'historial', component:HistorialComponent},

    {path:'medico',component:MedicoComponent},

    {path: '', redirectTo: 'index',pathMatch: 'full'},
    {path: '**',redirectTo: 'index',pathMatch: 'full'},
];
