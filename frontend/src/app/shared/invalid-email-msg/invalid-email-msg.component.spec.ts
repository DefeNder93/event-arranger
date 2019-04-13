import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidEmailMsgComponent } from './invalid-email-msg.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

describe('InvalidEmailMsgComponent', () => {
  let component: InvalidEmailMsgComponent;
  let fixture: ComponentFixture<InvalidEmailMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidEmailMsgComponent ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild()
      ]
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
