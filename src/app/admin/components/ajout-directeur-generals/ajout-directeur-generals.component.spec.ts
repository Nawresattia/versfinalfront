import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDirecteurGeneralsComponent } from './ajout-directeur-generals.component';

describe('AjoutDirecteurGeneralsComponent', () => {
  let component: AjoutDirecteurGeneralsComponent;
  let fixture: ComponentFixture<AjoutDirecteurGeneralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDirecteurGeneralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDirecteurGeneralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
