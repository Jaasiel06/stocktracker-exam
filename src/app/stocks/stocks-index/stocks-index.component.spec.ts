import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksIndexComponent } from './stocks-index.component';

describe('StocksIndexComponent', () => {
  let component: StocksIndexComponent;
  let fixture: ComponentFixture<StocksIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
