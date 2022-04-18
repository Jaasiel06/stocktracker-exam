import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentIndexComponent } from './sentiment-index.component';

describe('SentimentIndexComponent', () => {
  let component: SentimentIndexComponent;
  let fixture: ComponentFixture<SentimentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
