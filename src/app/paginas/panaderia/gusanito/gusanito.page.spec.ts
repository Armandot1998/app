import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GusanitoPage } from './gusanito.page';

describe('GusanitoPage', () => {
  let component: GusanitoPage;
  let fixture: ComponentFixture<GusanitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GusanitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
