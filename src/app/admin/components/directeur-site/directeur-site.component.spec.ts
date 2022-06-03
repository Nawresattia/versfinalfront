import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirecteurSiteComponent } from 'src/app/directeur-site/directeur-site.component';


describe('DirecteurSiteComponent', () => {
  let component: DirecteurSiteComponent;
  let fixture: ComponentFixture<DirecteurSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecteurSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecteurSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
