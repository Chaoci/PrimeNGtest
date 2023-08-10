import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSearchbarComponent } from './payment-searchbar.component';

describe('PaymentSearchbarComponent', () => {
  let component: PaymentSearchbarComponent;
  let fixture: ComponentFixture<PaymentSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaymentSearchbarComponent]
    });
    fixture = TestBed.createComponent(PaymentSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
