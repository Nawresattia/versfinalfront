import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirecteurGeneralComponent } from 'src/app/directeur-general/directeur-general.component';


describe('DirecteurGeneralComponent', () => {
  let component: DirecteurGeneralComponent;
  let fixture: ComponentFixture<DirecteurGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecteurGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecteurGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
