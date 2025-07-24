import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFundamentalComponent } from './music-fundamental.component';

describe('MusicFundamentalComponent', () => {
  let component: MusicFundamentalComponent;
  let fixture: ComponentFixture<MusicFundamentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicFundamentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicFundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
