import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProConstStreamPageComponent } from './pro-const-stream-page.component';

describe('ProConstStreamPageComponent', () => {
  let component: ProConstStreamPageComponent;
  let fixture: ComponentFixture<ProConstStreamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProConstStreamPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProConstStreamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
