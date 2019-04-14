import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import 'jest';
import {Utils} from "./utils.service";
import {ReactiveFormsModule, FormBuilder} from '@angular/forms';

describe('Utils', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
  }));

  test('should be created', () => {
    const service: Utils = TestBed.get(Utils);
    expect(service).toBeTruthy();
  });

  test('should reset form', () => {
    const fb: FormBuilder = TestBed.get(FormBuilder);
    const userForm = fb.group({
      firstName: ['Alex', []],
      lastName: ['Beck', []],
      password: ['123', []],
      email: ['sdfdf@df.df', []]
    });
    const service: Utils = TestBed.get(Utils);
    expect(userForm.get('firstName').value).toBe('Alex');
    service.resetForm(userForm);
    expect(userForm.get('firstName').value).toBeNull();
    expect(userForm.get('lastName').value).toBeNull();
    expect(userForm.get('password').value).toBeNull();
    expect(userForm.get('email').value).toBeNull();
  });
});
