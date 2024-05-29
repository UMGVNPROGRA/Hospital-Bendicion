import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDoctorComponent } from './menu-doctor.component';

describe('MenuDoctorComponent', () => {
  let component: MenuDoctorComponent;
  let fixture: ComponentFixture<MenuDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
