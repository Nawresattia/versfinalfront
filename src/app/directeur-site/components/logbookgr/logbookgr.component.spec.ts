import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookgrComponent } from './logbookgr.component';

describe('LogbookgrComponent', () => {
  let component: LogbookgrComponent;
  let fixture: ComponentFixture<LogbookgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbookgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
