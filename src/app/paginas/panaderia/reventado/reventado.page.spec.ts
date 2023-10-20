import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReventadoPage } from './reventado.page';

describe('ReventadoPage', () => {
  let component: ReventadoPage;
  let fixture: ComponentFixture<ReventadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReventadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
