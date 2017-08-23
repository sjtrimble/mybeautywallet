import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletFiltersComponent } from './wallet-filters.component';

describe('WalletFiltersComponent', () => {
  let component: WalletFiltersComponent;
  let fixture: ComponentFixture<WalletFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
