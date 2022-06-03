import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookfazizaComponent } from './logbookfaziza.component';

describe('LogbookfazizaComponent', () => {
  let component: LogbookfazizaComponent;
  let fixture: ComponentFixture<LogbookfazizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbookfazizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookfazizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
