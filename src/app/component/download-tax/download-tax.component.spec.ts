import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTaxComponent } from './download-tax.component';

describe('DownloadTaxComponent', () => {
  let component: DownloadTaxComponent;
  let fixture: ComponentFixture<DownloadTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadTaxComponent]
    });
    fixture = TestBed.createComponent(DownloadTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
