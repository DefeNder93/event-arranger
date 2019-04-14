import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredMsgComponent } from './required-msg.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import 'jest';

describe('RequiredMsgComponent', () => {
  let component: RequiredMsgComponent;
  let fixture: ComponentFixture<RequiredMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredMsgComponent ],
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
    fixture = TestBed.createComponent(RequiredMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
