import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; // +
import { NgUploadImageModule } from 'ng-upload-image'; // testing module

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // +
    NgUploadImageModule // +
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
