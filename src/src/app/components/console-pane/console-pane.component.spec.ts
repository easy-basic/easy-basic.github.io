import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePaneComponent } from './console-pane.component';

describe('ConsolePaneComponent', () => {
  let component: ConsolePaneComponent;
  let fixture: ComponentFixture<ConsolePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
