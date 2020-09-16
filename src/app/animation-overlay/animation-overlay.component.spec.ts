import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationOverlayComponent } from './animation-overlay.component';

describe('AnimationOverlayComponent', () => {
  let component: AnimationOverlayComponent;
  let fixture: ComponentFixture<AnimationOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
