import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNoteComponent } from './post-note.component';

describe('PostNoteComponent', () => {
  let component: PostNoteComponent;
  let fixture: ComponentFixture<PostNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
