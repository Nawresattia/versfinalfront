import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGardienComponent } from './modifier-gardien.component';

describe('ModifierGardienComponent', () => {
  let component: ModifierGardienComponent;
  let fixture: ComponentFixture<ModifierGardienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierGardienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierGardienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
