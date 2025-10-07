import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServices } from './product-services';

describe('ProductServices', () => {
  let component: ProductServices;
  let fixture: ComponentFixture<ProductServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
