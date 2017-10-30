import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinmeetComponent } from './joinmeet.component';

describe('JoinmeetComponent', () => {
  let component: JoinmeetComponent;
  let fixture: ComponentFixture<JoinmeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinmeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
