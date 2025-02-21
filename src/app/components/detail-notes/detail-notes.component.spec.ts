import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNotesComponent } from './detail-notes.component';

describe('DetailNotesComponent', () => {
  let component: DetailNotesComponent;
  let fixture: ComponentFixture<DetailNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
