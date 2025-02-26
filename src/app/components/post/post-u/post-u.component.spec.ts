import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUComponent } from './post-u.component';

describe('PostUComponent', () => {
  let component: PostUComponent;
  let fixture: ComponentFixture<PostUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
