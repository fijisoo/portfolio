import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSongsComponent } from './fav-songs.component';

describe('FavSongsComponent', () => {
  let component: FavSongsComponent;
  let fixture: ComponentFixture<FavSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
