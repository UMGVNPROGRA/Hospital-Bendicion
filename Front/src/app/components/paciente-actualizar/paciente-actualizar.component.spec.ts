import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteActualizarComponent } from './paciente-actualizar.component';

describe('PacienteActualizarComponent', () => {
  let component: PacienteActualizarComponent;
  let fixture: ComponentFixture<PacienteActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacienteActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
