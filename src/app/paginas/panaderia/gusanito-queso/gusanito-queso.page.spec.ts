import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GusanitoQuesoPage } from './gusanito-queso.page';

describe('GusanitoQuesoPage', () => {
  let component: GusanitoQuesoPage;
  let fixture: ComponentFixture<GusanitoQuesoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GusanitoQuesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
