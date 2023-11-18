import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationSummaryComponent } from './donation-summary.component';

describe('DonationSummaryComponent', () => {
  let component: DonationSummaryComponent;
  let fixture: ComponentFixture<DonationSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationSummaryComponent]
    });
    fixture = TestBed.createComponent(DonationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
