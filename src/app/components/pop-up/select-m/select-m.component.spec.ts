import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMComponent } from './select-m.component';

describe('SelectMComponent', () => {
  let component: SelectMComponent;
  let fixture: ComponentFixture<SelectMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
