import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDirecteurGeneralsComponent } from './modifier-directeur-generals.component';

describe('ModifierDirecteurGeneralsComponent', () => {
  let component: ModifierDirecteurGeneralsComponent;
  let fixture: ComponentFixture<ModifierDirecteurGeneralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDirecteurGeneralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDirecteurGeneralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
