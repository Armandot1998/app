import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialesPage } from './especiales.page';

describe('EspecialesPage', () => {
  let component: EspecialesPage;
  let fixture: ComponentFixture<EspecialesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspecialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
