import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinahComponent } from './dinah.component';

describe('DinahComponent', () => {
  let component: DinahComponent;
  let fixture: ComponentFixture<DinahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
