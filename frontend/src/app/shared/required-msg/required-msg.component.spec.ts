import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredMsgComponent } from './required-msg.component';

describe('RequiredMsgComponent', () => {
  let component: RequiredMsgComponent;
  let fixture: ComponentFixture<RequiredMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
