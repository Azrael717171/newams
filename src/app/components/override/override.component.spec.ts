import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrideComponent } from './override.component';

describe('OverrideComponent', () => {
  let component: OverrideComponent;
  let fixture: ComponentFixture<OverrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverrideComponent]
    });
    fixture = TestBed.createComponent(OverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
