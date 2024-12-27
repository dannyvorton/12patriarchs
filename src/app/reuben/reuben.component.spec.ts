import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReubenComponent } from './reuben.component';

describe('ReubenComponent', () => {
  let component: ReubenComponent;
  let fixture: ComponentFixture<ReubenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReubenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReubenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
