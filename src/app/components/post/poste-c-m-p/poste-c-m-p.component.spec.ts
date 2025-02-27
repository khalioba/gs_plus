import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteCMPComponent } from './poste-c-m-p.component';

describe('PosteCMPComponent', () => {
  let component: PosteCMPComponent;
  let fixture: ComponentFixture<PosteCMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosteCMPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteCMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
