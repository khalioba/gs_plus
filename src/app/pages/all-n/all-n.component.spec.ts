import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNComponent } from './all-n.component';

describe('AllNComponent', () => {
  let component: AllNComponent;
  let fixture: ComponentFixture<AllNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
