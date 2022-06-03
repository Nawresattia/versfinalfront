import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbooksuiviParcRComponent } from './logbooksuivi-parc-r.component';

describe('LogbooksuiviParcRComponent', () => {
  let component: LogbooksuiviParcRComponent;
  let fixture: ComponentFixture<LogbooksuiviParcRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbooksuiviParcRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbooksuiviParcRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
