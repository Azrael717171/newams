import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOverrideComponent } from './override.component';

describe('OverrideComponent', () => {
  let component: TimeOverrideComponent;
  let fixture: ComponentFixture<TimeOverrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeOverrideComponent]
    });
    fixture = TestBed.createComponent(TimeOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
