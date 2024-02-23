import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProConsPageComponent } from './pro-cons-page.component';

describe('ProConsPageComponent', () => {
  let component: ProConsPageComponent;
  let fixture: ComponentFixture<ProConsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProConsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProConsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
