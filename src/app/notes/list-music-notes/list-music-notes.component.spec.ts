import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicNotesComponent } from './list-music-notes.component';

describe('ListMusicNotesComponent', () => {
  let component: ListMusicNotesComponent;
  let fixture: ComponentFixture<ListMusicNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMusicNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMusicNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
