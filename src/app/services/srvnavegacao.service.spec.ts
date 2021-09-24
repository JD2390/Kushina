import { TestBed } from '@angular/core/testing';

import { SrvnavegacaoService } from './srvnavegacao.service';

describe('SrvnavegacaoService', () => {
  let service: SrvnavegacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvnavegacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
