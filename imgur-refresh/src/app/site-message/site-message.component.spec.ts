import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMessageComponent } from './site-message.component';

describe('SiteMessageComponent', () => {
  let component: SiteMessageComponent;
  let fixture: ComponentFixture<SiteMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
