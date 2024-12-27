import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephComponent } from './joseph.component';

describe('JosephComponent', () => {
  let component: JosephComponent;
  let fixture: ComponentFixture<JosephComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JosephComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JosephComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
