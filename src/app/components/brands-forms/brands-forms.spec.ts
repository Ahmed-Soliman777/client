import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsForms } from './brands-forms';

describe('BrandsForms', () => {
  let component: BrandsForms;
  let fixture: ComponentFixture<BrandsForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
