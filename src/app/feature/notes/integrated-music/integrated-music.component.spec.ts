import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedMusicComponent } from './integrated-music.component';

describe('IntegratedMusicComponent', () => {
  let component: IntegratedMusicComponent;
  let fixture: ComponentFixture<IntegratedMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegratedMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
