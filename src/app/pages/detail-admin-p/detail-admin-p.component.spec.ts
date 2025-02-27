import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAdminPComponent } from './detail-admin-p.component';

describe('DetailAdminPComponent', () => {
  let component: DetailAdminPComponent;
  let fixture: ComponentFixture<DetailAdminPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailAdminPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAdminPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
