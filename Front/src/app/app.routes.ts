import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from "./components/citas/citas.component";
import { FacturaComponent } from './components/factura/factura.component';
import { RecetaComponent } from './components/receta/receta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { CitasProgramadasComponent } from "./components/citas-programadas/citas-programadas.component";

import { Component } from '@angular/core';
import { HistorialComponent } from './components/historial/historial.component';
import { MedicoComponent } from './components/medico/medico.component';
import { MenuAdministradorComponent } from './components/menu-principal/menu-administrador/menu-administrador.component';
import { MenuSecretariaComponent } from './components/menu-principal/menu-secretaria/menu-secretaria.component';
import { UsuarioComponent } from './components/nav-usuarios/viewusuarios/usuario.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { MenuDoctorComponent } from './components/menu-principal/menu-doctor/menu-doctor.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { UsuariosComponent } from './components/nav-usuarios/reg-user/reg-user.component';
import { PacienteActualizarComponent } from './components/paciente-actualizar/paciente-actualizar.component';
import { RecetaConsultaComponent } from './components/receta-consulta/receta-consulta.component';

export const routes: Routes = [

  {
    path: 'index',
    loadComponent: () => import('./components/layout/landing/landing.component'),
  },
  { path: 'login', component: LoginComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'usuarios', component: UsuarioComponent },

  { path: 'paciente', component: PacienteComponent },
  { path: 'pacienteactualizar', component: PacienteActualizarComponent },

  { path: 'recetas', component: RecetaComponent },
  { path: 'citasprogramadas', component: CitasProgramadasComponent },

  { path: 'historial', component: HistorialComponent },

  { path: 'medico', component: MedicoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'especialidad', component: EspecialidadComponent},

  {
    path: 'administrador', component: MenuAdministradorComponent,
    children: [

      {path: 'usuarios', component: UsuarioComponent  },
      {path: 'reguser', component: UsuariosComponent},
      { path: 'historial', component: HistorialComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: 'recetas', component: RecetaComponent },
      { path: 'citasprogramadas', component: CitasProgramadasComponent },
      { path: 'medico', component: MedicoComponent },
      { path: 'factura', component: FacturaComponent },
      { path: 'medicamentos', component: MedicamentosComponent },
      { path: 'especialidad', component: EspecialidadComponent},
      {path: 'consultaReceta', component: RecetaConsultaComponent}
    ]
  },
  {
    path: 'secretaria', component: MenuSecretariaComponent,
    children: [
      { path: 'historial', component: HistorialComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: 'citasprogramadas', component: CitasProgramadasComponent },
      { path: 'factura', component: FacturaComponent },
      { path: 'medicamentos', component: MedicamentosComponent },

    ]
  },
  {
    path: 'doctor', component: MenuDoctorComponent,
    children: [
      { path: 'citasprogramadas', component: CitasProgramadasComponent },
      { path: 'recetas', component: RecetaComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'medicamentos', component: MedicamentosComponent },
    ]
  },

  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
];
