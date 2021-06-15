
# Installation

This is a Angular component module for upload images.

here we are using following package in component for deal with upload point.
```javascript
import { HttpClient } from '@angular/common/http';
```

### Installation is done using the npm install command:

```bash
$ npm install ng-upload-image
```

### insert module selector to &#10094;name&#10095;.component.html

```javascript
import { NgUploadImageModule } from 'ng-upload-image';

@NgModule({
  declarations: [ /* ... */  ],
  imports: [
    /* ... */
    NgUploadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
```


### Insert module selector to &#10094;name&#10095;.component.html

```html
    <ng-upload-image  
        [apiUrl]= "'http://localhost:3000/uploads'"
    ></ng-upload-image>
```
### Get feedback

```html
    <ng-upload-image
        (onResponse)="getUploadResponse($event)"  
        [apiUrl]= "'http://localhost:3000/uploads'"
    ></ng-upload-image>
```
if need to receive the uploaded response to the component then add <mark> (onResponse) </mark> event binder inside tags.   
note: you have to create <mark> getUploadResponse(res) </mark> method in &#10094;name&#10095;.component.html

