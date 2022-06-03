import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbsretourembComponent } from './logbsretouremb.component';

describe('LogbsretourembComponent', () => {
  let component: LogbsretourembComponent;
  let fixture: ComponentFixture<LogbsretourembComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbsretourembComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbsretourembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
