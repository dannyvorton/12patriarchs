import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenjaminComponent } from './benjamin.component';

describe('BenjaminComponent', () => {
  let component: BenjaminComponent;
  let fixture: ComponentFixture<BenjaminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenjaminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenjaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
