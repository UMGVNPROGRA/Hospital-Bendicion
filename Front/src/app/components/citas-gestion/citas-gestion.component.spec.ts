import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasGestionComponent } from './citas-gestion.component';

describe('CitasGestionComponent', () => {
  let component: CitasGestionComponent;
  let fixture: ComponentFixture<CitasGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
