import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { NgUploadImageComponent } from './ng-upload-image.component';



@NgModule({
  declarations: [NgUploadImageComponent],
  imports: [
    CommonModule
  ],
  exports: [NgUploadImageComponent]
})
export class NgUploadImageModule { }
