import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonInfoComponent } from './modal-person-info.component';

describe('ModalPersonInfoComponent', () => {
  let component: ModalPersonInfoComponent;
  let fixture: ComponentFixture<ModalPersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPersonInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
