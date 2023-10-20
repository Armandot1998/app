import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleteriaPage } from './galleteria.page';

describe('GalleteriaPage', () => {
  let component: GalleteriaPage;
  let fixture: ComponentFixture<GalleteriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GalleteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
