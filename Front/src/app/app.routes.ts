import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CitasComponent } from './components/citas/citas.component';
import { FacturaComponent } from './components/factura/factura.component';
import { RecetaComponent } from './components/receta/receta.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { CitasProgramadasComponent } from './components/citas-programadas/citas-programadas.component';

import { Component } from '@angular/core';
import { HistorialComponent } from './components/historial/historial.component';

import { MenuAdministradorComponent } from './components/menu-principal/menu-administrador/menu-administrador.component';
import { MenuSecretariaComponent } from './components/menu-principal/menu-secretaria/menu-secretaria.component';
import { UsuarioComponent } from './components/nav-usuarios/viewusuarios/usuario.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { MenuDoctorComponent } from './components/menu-principal/menu-doctor/menu-doctor.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { UsuariosComponent } from './components/nav-usuarios/reg-user/reg-user.component';
import { PacienteActualizarComponent } from './components/paciente-actualizar/paciente-actualizar.component';
import { RecetaConsultaComponent } from './components/receta-consulta/receta-consulta.component';
import { ModUserComponent } from './components/nav-usuarios/mod-user/mod-user.component';
import { PacienteConsultarComponent } from './components/paciente-consultar/paciente-consultar.component';

import { MedicamentosConsultarComponent } from './components/medicamentos-consultar/medicamentos-consultar.component';

import { MedicoComponent } from './components/nav-medico/medico/medico.component';
import { RegMedicoComponent } from './components/nav-medico/reg-medico/reg-medico.component';


export const routes: Routes = [
  {
    path: 'index',
    loadComponent: () =>
      import('./components/layout/landing/landing.component'),
  },
  { path: 'login', component: LoginComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'usuarios', component: UsuarioComponent },

  { path: 'paciente', component: PacienteComponent },
  { path: 'pacienteactualizar', component: PacienteActualizarComponent },
  { path: 'pacienteconsultar', component: PacienteConsultarComponent },

  { path: 'recetas', component: RecetaComponent },
  { path: 'citasprogramadas', component: CitasProgramadasComponent },

  { path: 'historial', component: HistorialComponent },

  { path: 'medico', component: MedicoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'especialidad', component: EspecialidadComponent },
  {
    path: 'administrador',
    component: MenuAdministradorComponent,
    children: [
      {path: 'regmedico', component: RegMedicoComponent},
      {path: 'updateuser', component: ModUserComponent},
      {path: 'usuarios', component: UsuarioComponent  },
      {path: 'reguser', component: UsuariosComponent},
      { path: 'historial', component: HistorialComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'paciente/:id', component: PacienteComponent },
      { path: 'recetas/:id', component: RecetaComponent },
      { path: 'citasprogramadas', component: CitasProgramadasComponent },
      { path: 'medico', component: MedicoComponent },
      { path: 'factura', component: FacturaComponent },
      { path: 'medicamentos/:id', component: MedicamentosComponent },
      { path: 'especialidad', component: EspecialidadComponent },
      { path: 'consultaReceta', component: RecetaConsultaComponent },
      { path: 'consultaPaciente', component: PacienteConsultarComponent },
      { path: 'consultaMedicamento', component: MedicamentosConsultarComponent},
    ],
  },
  {
    path: 'secretaria',
    component: MenuSecretariaComponent,
    children: [
      { path: 'historial', component: HistorialComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: 'citasprogramadas', component: CitasProgramadasComponent },
      { path: 'factura', component: FacturaComponent },
      { path: 'medicamentos', component: MedicamentosComponent },
    ],
  },
  {
    path: 'doctor',
    component: MenuDoctorComponent,
    children: [
      { path: 'citasprogramadas', component: CitasProgramadasComponent },
      { path: 'recetas/:id', component: RecetaComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'medicamentos', component: MedicamentosComponent },
    ],
  },

  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
];
