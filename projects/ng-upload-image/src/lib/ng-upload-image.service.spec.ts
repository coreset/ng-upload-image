import { TestBed } from '@angular/core/testing';

import { NgUploadImageService } from './ng-upload-image.service';

describe('NgUploadImageService', () => {
  let service: NgUploadImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUploadImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
