import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproximateAreaUnderTheCurveComponent } from './approximate-area-under-the-curve.component';

describe('ApproximateAreaUnderTheCurveComponent', () => {
  let component: ApproximateAreaUnderTheCurveComponent;
  let fixture: ComponentFixture<ApproximateAreaUnderTheCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproximateAreaUnderTheCurveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproximateAreaUnderTheCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
