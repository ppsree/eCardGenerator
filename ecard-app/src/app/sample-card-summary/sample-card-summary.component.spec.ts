import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCardSummaryComponent } from './sample-card-summary.component';

describe('SampleCardSummaryComponent', () => {
  let component: SampleCardSummaryComponent;
  let fixture: ComponentFixture<SampleCardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCardSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
