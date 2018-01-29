import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenerComponent } from './contener.component';

describe('ContenerComponent', () => {
  let component: ContenerComponent;
  let fixture: ComponentFixture<ContenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
