import { TestBed } from '@angular/core/testing';

import { WebReqInterceptor } from './web-request.interceptor.service';

describe('WebRequestInterceptorService', () => {
  let service: WebReqInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebReqInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
