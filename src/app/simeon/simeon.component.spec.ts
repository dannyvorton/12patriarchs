import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimeonComponent } from './simeon.component';

describe('SimeonComponent', () => {
  let component: SimeonComponent;
  let fixture: ComponentFixture<SimeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimeonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
