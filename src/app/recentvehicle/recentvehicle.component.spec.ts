import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentvehicleComponent } from './recentvehicle.component';

describe('RecentvehicleComponent', () => {
  let component: RecentvehicleComponent;
  let fixture: ComponentFixture<RecentvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentvehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
