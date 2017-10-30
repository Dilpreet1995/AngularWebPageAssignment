import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagrSliderComponent } from './imagr-slider.component';

describe('ImagrSliderComponent', () => {
  let component: ImagrSliderComponent;
  let fixture: ComponentFixture<ImagrSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagrSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagrSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
