import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssacharComponent } from './issachar.component';

describe('IssacharComponent', () => {
  let component: IssacharComponent;
  let fixture: ComponentFixture<IssacharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssacharComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssacharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
