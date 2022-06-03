import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbmainteComponent } from './logbmainte.component';

describe('LogbmainteComponent', () => {
  let component: LogbmainteComponent;
  let fixture: ComponentFixture<LogbmainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbmainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbmainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
