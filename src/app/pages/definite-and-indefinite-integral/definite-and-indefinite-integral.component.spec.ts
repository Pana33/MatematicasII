import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiniteAndIndefiniteIntegralComponent } from './definite-and-indefinite-integral.component';

describe('DefiniteAndIndefiniteIntegralComponent', () => {
  let component: DefiniteAndIndefiniteIntegralComponent;
  let fixture: ComponentFixture<DefiniteAndIndefiniteIntegralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefiniteAndIndefiniteIntegralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefiniteAndIndefiniteIntegralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
