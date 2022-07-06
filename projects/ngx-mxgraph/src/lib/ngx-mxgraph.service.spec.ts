import { TestBed } from '@angular/core/testing';

import { NgxMxgraphService } from './ngx-mxgraph.service';

describe('NgxMxgraphService', () => {
  let service: NgxMxgraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMxgraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
