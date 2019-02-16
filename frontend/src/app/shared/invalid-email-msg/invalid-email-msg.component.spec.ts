import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidEmailMsgComponent } from './invalid-email-msg.component';

describe('InvalidEmailMsgComponent', () => {
  let component: InvalidEmailMsgComponent;
  let fixture: ComponentFixture<InvalidEmailMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidEmailMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidEmailMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
