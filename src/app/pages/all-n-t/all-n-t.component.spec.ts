import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNTComponent } from './all-n-t.component';

describe('AllNTComponent', () => {
  let component: AllNTComponent;
  let fixture: ComponentFixture<AllNTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllNTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
