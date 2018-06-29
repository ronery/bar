import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosVideosComponent } from './fotos-videos.component';

describe('FotosVideosComponent', () => {
  let component: FotosVideosComponent;
  let fixture: ComponentFixture<FotosVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
