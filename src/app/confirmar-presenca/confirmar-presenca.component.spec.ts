import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPresencaComponent } from './confirmar-presenca.component';

describe('ConfirmarPresencaComponent', () => {
  let component: ConfirmarPresencaComponent;
  let fixture: ComponentFixture<ConfirmarPresencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarPresencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
