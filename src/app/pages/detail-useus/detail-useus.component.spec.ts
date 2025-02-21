import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUseusComponent } from './detail-useus.component';

describe('DetailUseusComponent', () => {
  let component: DetailUseusComponent;
  let fixture: ComponentFixture<DetailUseusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailUseusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
