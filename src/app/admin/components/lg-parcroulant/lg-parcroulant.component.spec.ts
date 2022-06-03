import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgParcroulantComponent } from './lg-parcroulant.component';

describe('LgParcroulantComponent', () => {
  let component: LgParcroulantComponent;
  let fixture: ComponentFixture<LgParcroulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgParcroulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgParcroulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
