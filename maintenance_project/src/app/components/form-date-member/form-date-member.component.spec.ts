import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDateMemberComponent } from './form-date-member.component';

describe('FormDateMemberComponent', () => {
  let component: FormDateMemberComponent;
  let fixture: ComponentFixture<FormDateMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDateMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDateMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
