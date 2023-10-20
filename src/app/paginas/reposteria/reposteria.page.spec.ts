import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposteriaPage } from './reposteria.page';

describe('ReposteriaPage', () => {
  let component: ReposteriaPage;
  let fixture: ComponentFixture<ReposteriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReposteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
