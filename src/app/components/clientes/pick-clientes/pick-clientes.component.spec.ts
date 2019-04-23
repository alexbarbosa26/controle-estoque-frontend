import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickClientesComponent } from './pick-clientes.component';

describe('PickClientesComponent', () => {
  let component: PickClientesComponent;
  let fixture: ComponentFixture<PickClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
