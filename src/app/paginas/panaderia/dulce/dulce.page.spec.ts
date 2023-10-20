import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DulcePage } from './dulce.page';

describe('DulcePage', () => {
  let component: DulcePage;
  let fixture: ComponentFixture<DulcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DulcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
