import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbscourComponent } from './logbscour.component';

describe('LogbscourComponent', () => {
  let component: LogbscourComponent;
  let fixture: ComponentFixture<LogbscourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbscourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbscourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
