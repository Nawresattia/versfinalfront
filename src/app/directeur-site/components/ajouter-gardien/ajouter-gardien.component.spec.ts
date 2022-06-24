import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGardienComponent } from './ajouter-gardien.component';

describe('AjouterGardienComponent', () => {
  let component: AjouterGardienComponent;
  let fixture: ComponentFixture<AjouterGardienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGardienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGardienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
