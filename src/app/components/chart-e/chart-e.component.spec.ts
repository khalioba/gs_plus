import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEComponent } from './chart-e.component';

describe('ChartEComponent', () => {
  let component: ChartEComponent;
  let fixture: ComponentFixture<ChartEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
