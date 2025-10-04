import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoris } from './categoris';

describe('Categoris', () => {
  let component: Categoris;
  let fixture: ComponentFixture<Categoris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categoris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categoris);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
