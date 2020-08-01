import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTarefaFComponent } from './input-tarefaF.component';

describe('InputTarefaFComponent', () => {
  let component: InputTarefaFComponent;
  let fixture: ComponentFixture<InputTarefaFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTarefaFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTarefaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
