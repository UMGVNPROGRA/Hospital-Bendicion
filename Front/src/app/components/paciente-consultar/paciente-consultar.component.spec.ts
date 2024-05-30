import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteConsultarComponent } from './paciente-consultar.component';

describe('PacienteConsultarComponent', () => {
  let component: PacienteConsultarComponent;
  let fixture: ComponentFixture<PacienteConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteConsultarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacienteConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
