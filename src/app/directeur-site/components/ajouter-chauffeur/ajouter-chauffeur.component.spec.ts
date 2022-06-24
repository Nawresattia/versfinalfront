import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChauffeurComponent } from './ajouter-chauffeur.component';

describe('AjouterChauffeurComponent', () => {
  let component: AjouterChauffeurComponent;
  let fixture: ComponentFixture<AjouterChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
