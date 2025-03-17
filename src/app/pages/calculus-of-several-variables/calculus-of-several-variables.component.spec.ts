import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculusOfSeveralVariablesComponent } from './calculus-of-several-variables.component';

describe('CalculusOfSeveralVariablesComponent', () => {
  let component: CalculusOfSeveralVariablesComponent;
  let fixture: ComponentFixture<CalculusOfSeveralVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculusOfSeveralVariablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculusOfSeveralVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
