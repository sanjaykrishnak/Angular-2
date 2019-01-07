import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSubmitComponent } from './animal-submit.component';

describe('AnimalSubmitComponent', () => {
  let component: AnimalSubmitComponent;
  let fixture: ComponentFixture<AnimalSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
