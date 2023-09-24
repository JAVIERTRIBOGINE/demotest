import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedReadComponent } from './shared-read.component';

describe('SharedReadComponent', () => {
  let component: SharedReadComponent;
  let fixture: ComponentFixture<SharedReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
