import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTrocasComponent } from './dashboard-trocas.component';

describe('DashboardTrocasComponent', () => {
  let component: DashboardTrocasComponent;
  let fixture: ComponentFixture<DashboardTrocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTrocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTrocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
