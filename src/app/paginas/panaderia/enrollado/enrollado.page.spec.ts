import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrolladoPage } from './enrollado.page';

describe('EnrolladoPage', () => {
  let component: EnrolladoPage;
  let fixture: ComponentFixture<EnrolladoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnrolladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
