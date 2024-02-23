import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraslatePageComponent } from './traslate-page.component';

describe('TraslatePageComponent', () => {
  let component: TraslatePageComponent;
  let fixture: ComponentFixture<TraslatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraslatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraslatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
