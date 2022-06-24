import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDirecteurSiteComponent } from './modifier-directeur-site.component';

describe('ModifierDirecteurSiteComponent', () => {
  let component: ModifierDirecteurSiteComponent;
  let fixture: ComponentFixture<ModifierDirecteurSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDirecteurSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDirecteurSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
