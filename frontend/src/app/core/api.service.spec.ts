import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { Api } from './api.service';
import 'jest';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CommonModule,
      HttpClientModule,
    ]
  }));

  test('should be created', () => {
    const service: Api = TestBed.get(Api);
    expect(service).toBeTruthy();
  });
});
