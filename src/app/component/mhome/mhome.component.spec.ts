import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhomeComponent } from './mhome.component';

describe('MhomeComponent', () => {
  let component: MhomeComponent;
  let fixture: ComponentFixture<MhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MhomeComponent]
    });
    fixture = TestBed.createComponent(MhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
