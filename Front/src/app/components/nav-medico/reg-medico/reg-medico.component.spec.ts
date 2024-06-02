import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMedicoComponent } from './reg-medico.component';

describe('RegMedicoComponent', () => {
  let component: RegMedicoComponent;
  let fixture: ComponentFixture<RegMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
