/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerificaEmailService } from './verificaEmail.service';

describe('Service: VerificaEmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaEmailService]
    });
  });

  it('should ...', inject([VerificaEmailService], (service: VerificaEmailService) => {
    expect(service).toBeTruthy();
  }));
});
