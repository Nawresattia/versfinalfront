import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecteurGeneralsComponent } from './directeur-generals.component';

describe('DirecteurGeneralsComponent', () => {
  let component: DirecteurGeneralsComponent;
  let fixture: ComponentFixture<DirecteurGeneralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecteurGeneralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecteurGeneralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
