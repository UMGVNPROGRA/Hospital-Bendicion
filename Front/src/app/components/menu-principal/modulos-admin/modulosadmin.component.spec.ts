import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosadminComponent } from './modulosadmin.component';

describe('ModulosadminComponent', () => {
  let component: ModulosadminComponent;
  let fixture: ComponentFixture<ModulosadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulosadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
