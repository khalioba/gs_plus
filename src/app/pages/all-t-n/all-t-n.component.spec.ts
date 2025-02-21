import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTNComponent } from './all-t-n.component';

describe('AllTNComponent', () => {
  let component: AllTNComponent;
  let fixture: ComponentFixture<AllTNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
