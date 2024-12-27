import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebulonComponent } from './zebulon.component';

describe('ZebulonComponent', () => {
  let component: ZebulonComponent;
  let fixture: ComponentFixture<ZebulonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZebulonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZebulonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
