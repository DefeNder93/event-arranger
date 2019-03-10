import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxlengthMsgComponent } from './maxlength-msg.component';

describe('MaxlengthMsgComponent', () => {
  let component: MaxlengthMsgComponent;
  let fixture: ComponentFixture<MaxlengthMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxlengthMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxlengthMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
