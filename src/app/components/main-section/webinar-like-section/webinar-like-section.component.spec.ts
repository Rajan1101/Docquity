import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarLikeSectionComponent } from './webinar-like-section.component';

describe('WebinarLikeSectionComponent', () => {
  let component: WebinarLikeSectionComponent;
  let fixture: ComponentFixture<WebinarLikeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebinarLikeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarLikeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
