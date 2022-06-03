import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbfournisseurazComponent } from './logbfournisseuraz.component';

describe('LogbfournisseurazComponent', () => {
  let component: LogbfournisseurazComponent;
  let fixture: ComponentFixture<LogbfournisseurazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbfournisseurazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbfournisseurazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
