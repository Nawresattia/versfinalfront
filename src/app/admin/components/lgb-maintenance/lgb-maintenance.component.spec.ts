import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgbMaintenanceComponent } from './lgb-maintenance.component';

describe('LgbMaintenanceComponent', () => {
  let component: LgbMaintenanceComponent;
  let fixture: ComponentFixture<LgbMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgbMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgbMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
