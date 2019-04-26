import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPodutosComponent } from './edit-podutos.component';

describe('EditPodutosComponent', () => {
  let component: EditPodutosComponent;
  let fixture: ComponentFixture<EditPodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
