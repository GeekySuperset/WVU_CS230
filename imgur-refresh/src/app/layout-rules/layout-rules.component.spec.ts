import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRulesComponent } from './layout-rules.component';

describe('LayoutRulesComponent', () => {
  let component: LayoutRulesComponent;
  let fixture: ComponentFixture<LayoutRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
