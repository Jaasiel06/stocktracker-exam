import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksTrackComponent } from './stocks-track.component';

describe('StocksTrackComponent', () => {
  let component: StocksTrackComponent;
  let fixture: ComponentFixture<StocksTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
