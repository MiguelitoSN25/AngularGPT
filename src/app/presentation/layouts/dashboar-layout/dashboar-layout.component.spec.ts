import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarLayoutComponent } from './dashboar-layout.component';

describe('DashboarLayoutComponent', () => {
  let component: DashboarLayoutComponent;
  let fixture: ComponentFixture<DashboarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
