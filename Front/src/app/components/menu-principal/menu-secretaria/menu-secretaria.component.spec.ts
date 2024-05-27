import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSecretariaComponent } from './menu-secretaria.component';

describe('MenuSecretariaComponent', () => {
  let component: MenuSecretariaComponent;
  let fixture: ComponentFixture<MenuSecretariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSecretariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
