import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaConsultaComponent } from './receta-consulta.component';

describe('RecetaConsultaComponent', () => {
  let component: RecetaConsultaComponent;
  let fixture: ComponentFixture<RecetaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
