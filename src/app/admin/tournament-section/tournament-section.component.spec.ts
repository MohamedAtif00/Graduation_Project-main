import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSectionComponent } from './tournament-section.component';

describe('TournamentSectionComponent', () => {
  let component: TournamentSectionComponent;
  let fixture: ComponentFixture<TournamentSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentSectionComponent]
    });
    fixture = TestBed.createComponent(TournamentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
