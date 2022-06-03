import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbsparcrComponent } from './logbsparcr.component';

describe('LogbsparcrComponent', () => {
  let component: LogbsparcrComponent;
  let fixture: ComponentFixture<LogbsparcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbsparcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbsparcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
