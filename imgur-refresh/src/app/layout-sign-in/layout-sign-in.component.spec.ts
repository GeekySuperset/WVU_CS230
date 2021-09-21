import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSignInComponent } from './layout-sign-in.component';

describe('LayoutSignInComponent', () => {
  let component: LayoutSignInComponent;
  let fixture: ComponentFixture<LayoutSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
