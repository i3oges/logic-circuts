import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateSelectorComponent } from './gate-selector.component';

describe('GateSelectorComponent', () => {
  let component: GateSelectorComponent;
  let fixture: ComponentFixture<GateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
