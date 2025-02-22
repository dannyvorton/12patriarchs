import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZilpahComponent } from './zilpah.component';

describe('ZilpahComponent', () => {
  let component: ZilpahComponent;
  let fixture: ComponentFixture<ZilpahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZilpahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZilpahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
