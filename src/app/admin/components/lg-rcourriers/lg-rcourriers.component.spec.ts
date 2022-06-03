import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgRCourriersComponent } from './lg-rcourriers.component';

describe('LgRCourriersComponent', () => {
  let component: LgRCourriersComponent;
  let fixture: ComponentFixture<LgRCourriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgRCourriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgRCourriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
