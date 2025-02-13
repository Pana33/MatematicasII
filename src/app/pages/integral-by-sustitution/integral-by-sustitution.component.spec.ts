import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralBySustitutionComponent } from './integral-by-sustitution.component';

describe('IntegralBySustitutionComponent', () => {
  let component: IntegralBySustitutionComponent;
  let fixture: ComponentFixture<IntegralBySustitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegralBySustitutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntegralBySustitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
