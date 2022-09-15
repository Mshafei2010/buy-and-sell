import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingListingsPageComponent } from './editing-listings-page.component';

describe('EditingListingsPageComponent', () => {
  let component: EditingListingsPageComponent;
  let fixture: ComponentFixture<EditingListingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingListingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditingListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
