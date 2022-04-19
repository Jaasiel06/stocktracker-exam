import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
  let service: RestApiService;

  let httpClient: HttpClient;

  beforeEach(() => {

    const spyHttpClient = jasmine.createSpyObj('HttpClient', ['getValue']);
    TestBed.configureTestingModule({
      providers: [

        { provide: HttpClient, useValue: spyHttpClient }
      ]
    });
    service = TestBed.inject(RestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
