import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookSuiviRCourriersComponent } from './logbook-suivi-r-courriers.component';

describe('LogbookSuiviRCourriersComponent', () => {
  let component: LogbookSuiviRCourriersComponent;
  let fixture: ComponentFixture<LogbookSuiviRCourriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbookSuiviRCourriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookSuiviRCourriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
