import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsherComponent } from './asher.component';

describe('AsherComponent', () => {
  let component: AsherComponent;
  let fixture: ComponentFixture<AsherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
