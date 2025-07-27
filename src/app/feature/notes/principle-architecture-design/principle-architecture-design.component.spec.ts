import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleArchitectureDesignComponent } from './principle-architecture-design.component';

describe('PrincipleArchitectureDesignComponent', () => {
  let component: PrincipleArchitectureDesignComponent;
  let fixture: ComponentFixture<PrincipleArchitectureDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipleArchitectureDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipleArchitectureDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
