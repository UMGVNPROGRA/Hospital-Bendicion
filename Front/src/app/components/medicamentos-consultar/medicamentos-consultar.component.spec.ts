import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosConsultarComponent } from './medicamentos-consultar.component';

describe('MedicamentosConsultarComponent', () => {
  let component: MedicamentosConsultarComponent;
  let fixture: ComponentFixture<MedicamentosConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentosConsultarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentosConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
