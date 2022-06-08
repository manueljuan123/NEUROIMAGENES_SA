import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CounterService', () => {
  let service: CounterService;
  let httpCLient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CounterService);
    httpCLient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
