import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RachelComponent } from './rachel.component';

describe('RachelComponent', () => {
  let component: RachelComponent;
  let fixture: ComponentFixture<RachelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RachelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RachelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
