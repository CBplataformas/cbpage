import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VexflowComponent } from './vexflow.component';

describe('VexflowComponent', () => {
  let component: VexflowComponent;
  let fixture: ComponentFixture<VexflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VexflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VexflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
