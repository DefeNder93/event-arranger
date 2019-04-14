import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxlengthMsgComponent } from './maxlength-msg.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import 'jest';

describe('MaxlengthMsgComponent', () => {
  let component: MaxlengthMsgComponent;
  let fixture: ComponentFixture<MaxlengthMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxlengthMsgComponent ],
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
    fixture = TestBed.createComponent(MaxlengthMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
