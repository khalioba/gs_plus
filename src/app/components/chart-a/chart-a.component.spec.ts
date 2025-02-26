import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAComponent } from './chart-a.component';

describe('ChartAComponent', () => {
  let component: ChartAComponent;
  let fixture: ComponentFixture<ChartAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
