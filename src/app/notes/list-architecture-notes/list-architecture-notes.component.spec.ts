import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArchitectureNotesComponent } from './list-architecture-notes.component';

describe('ListArchitectureNotesComponent', () => {
  let component: ListArchitectureNotesComponent;
  let fixture: ComponentFixture<ListArchitectureNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArchitectureNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArchitectureNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
