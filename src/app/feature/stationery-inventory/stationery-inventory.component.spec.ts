import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryInventoryComponent } from './stationery-inventory.component';

describe('StationeryInventoryComponent', () => {
  let component: StationeryInventoryComponent;
  let fixture: ComponentFixture<StationeryInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationeryInventoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationeryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
