import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtHistoryComponent } from './debt-history.component';

describe('DebtHistoryComponent', () => {
  let component: DebtHistoryComponent;
  let fixture: ComponentFixture<DebtHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
