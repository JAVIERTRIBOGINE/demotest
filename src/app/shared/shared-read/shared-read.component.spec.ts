import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedReadComponent } from './shared-read.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ExchangeValuesPipe } from 'src/app/core/pipes/exchange-values.pipe';
import { MaterialModule } from 'src/app/core/material/material.module';

describe('Shared-read component', () => {
  let component: SharedReadComponent;
  let fixture: ComponentFixture<SharedReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ExchangeValuesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedReadComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
