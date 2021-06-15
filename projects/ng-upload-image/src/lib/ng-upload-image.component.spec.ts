import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUploadImageComponent } from './ng-upload-image.component';

describe('NgUploadImageComponent', () => {
  let component: NgUploadImageComponent;
  let fixture: ComponentFixture<NgUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
