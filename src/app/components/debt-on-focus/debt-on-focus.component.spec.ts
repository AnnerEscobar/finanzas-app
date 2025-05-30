import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtOnFocusComponent } from './debt-on-focus.component';

describe('DebtOnFocusComponent', () => {
  let component: DebtOnFocusComponent;
  let fixture: ComponentFixture<DebtOnFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtOnFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtOnFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
