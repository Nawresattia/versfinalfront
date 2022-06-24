import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCamionComponent } from './ajouter-camion.component';

describe('AjouterCamionComponent', () => {
  let component: AjouterCamionComponent;
  let fixture: ComponentFixture<AjouterCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
