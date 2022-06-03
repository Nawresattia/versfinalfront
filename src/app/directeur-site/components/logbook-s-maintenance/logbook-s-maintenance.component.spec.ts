import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookSMaintenanceComponent } from './logbook-s-maintenance.component';

describe('LogbookSMaintenanceComponent', () => {
  let component: LogbookSMaintenanceComponent;
  let fixture: ComponentFixture<LogbookSMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbookSMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookSMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
