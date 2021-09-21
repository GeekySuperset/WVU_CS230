import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPrivacyComponent } from './layout-privacy.component';

describe('LayoutPrivacyComponent', () => {
  let component: LayoutPrivacyComponent;
  let fixture: ComponentFixture<LayoutPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
