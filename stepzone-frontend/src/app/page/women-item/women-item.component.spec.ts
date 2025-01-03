import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenItemComponent } from './women-item.component';

describe('WomenItemComponent', () => {
  let component: WomenItemComponent;
  let fixture: ComponentFixture<WomenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
