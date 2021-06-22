
## Introduction

This is a Angular component module for upload images.

## Installation

Installation is done using the npm install command:

```bash
$ npm install ng-upload-image
```

## Add Modules to app.module.ts

note: here we are using <mark>HttpClient</mark> in the package. so you need import it to your modules too.
```javascript
import { NgUploadImageModule } from 'ng-upload-image';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ /* ... */  ],
  imports: [
    /* ... */
    NgUploadImageModule,
    HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
```


## Use Module    

insert module selector to the &#10094;name&#10095;.component.html.

#### basic use    
```html
    <ng-upload-image  
        [apiUrl]= "'http://localhost:3000/uploads'"
    ></ng-upload-image>
```

#### Get feedback    
if need to receive the uploaded response to the component then add <mark> (onResponse) </mark> event binder inside tags.   
note: you have to create <mark> getUploadResponse(res) </mark> method in &#10094;name&#10095;.component.html
```html
    <ng-upload-image
        (onResponse)="getUploadResponse($event)"  
        [apiUrl]= "'http://localhost:3000/uploads'"
    ></ng-upload-image>
```

#### set max upload count    
this count value set to max image count to upload at once.  
```html
    <ng-upload-image
        [maxUploadCount]="12"
        (onResponse)="getUploadResponse($event)"  
        [apiUrl]= "'http://localhost:3000/uploads'"
    ></ng-upload-image>
```
