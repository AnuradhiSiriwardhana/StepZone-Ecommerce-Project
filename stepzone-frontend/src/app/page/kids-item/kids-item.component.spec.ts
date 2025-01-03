import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsItemComponent } from './kids-item.component';

describe('KidsItemComponent', () => {
  let component: KidsItemComponent;
  let fixture: ComponentFixture<KidsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
