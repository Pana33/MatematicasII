import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationByPartsComponent } from './integration-by-parts.component';

describe('IntegrationByPartsComponent', () => {
  let component: IntegrationByPartsComponent;
  let fixture: ComponentFixture<IntegrationByPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationByPartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntegrationByPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
