import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLabsComponent } from './data-labs.component';

describe('DataLabsComponent', () => {
  let component: DataLabsComponent;
  let fixture: ComponentFixture<DataLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
