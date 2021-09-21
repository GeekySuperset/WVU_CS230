import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEmeraldComponent } from './layout-emerald.component';

describe('LayoutEmeraldComponent', () => {
  let component: LayoutEmeraldComponent;
  let fixture: ComponentFixture<LayoutEmeraldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutEmeraldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEmeraldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
