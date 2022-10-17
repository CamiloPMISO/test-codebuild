import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskdboardComponent } from './riskdboard.component';

describe('RiskdboardComponent', () => {
  let component: RiskdboardComponent;
  let fixture: ComponentFixture<RiskdboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskdboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskdboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
