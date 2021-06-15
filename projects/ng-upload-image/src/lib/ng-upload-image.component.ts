import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient,HttpEventType } from '@angular/common/http';

@Component({
  selector: 'ng-upload-image',
  templateUrl: './ng-upload-image.component.html',
  styleUrls: ['./ng-upload-image.component.scss']
})
export class NgUploadImageComponent implements OnInit {


  selectedUrls:Array<String>= [];
  selectedFiles:Array<File>= [];
  uploadProgress:number= 0;

  constructor(
    private http:HttpClient
  ) { }

  @Input() validTypes:Array<string>=["image/png", "image/jpeg"];
  @Input() maxUploadCount:number= 12;
  @Input() preViewSize:number= 100;
  @Input() apiUrl:string= "";

  @Output() onResponse = new EventEmitter();


  ngOnInit(): void {
    this.isValidDevInput();
  }

  /* ********************************* */ 
  /** //////////  validate  \\\\\\\\\\ */ 
  /* ********************************* */ 

  /**
   * @property {Function} isValidType - validate developper  @Input() 
   * @returns {void} - is valid or not.
   */
  isValidDevInput():void{
    this.apiUrl ? {} :  this.setError("api url not defined");
    // throw new Error('Function not implemented.');
  }

  /**
   * @property {Function} isValidType - set valid image type
   * @param {type} - image type
   * @returns {boolean} - is valid or not.
   */
  isValidType(type):boolean{
    return this.validTypes.includes(type);
  }

  /**
   * @property {Function} isMaxUploadCount - set valid image type
   * @returns {boolean} - is valid or not.
   */
  isMaxUploadCount():boolean{
    return this.selectedFiles.length <= this.maxUploadCount;
  }



  /* ********************************* */ 
  /** ////////// user events \\\\\\\\\\ */ 
  /* ********************************* */ 

  /**
   * @property {Function} onSelect - select image to upload list
   * @param {MouseEvent} - select event
   * @returns {void}
   */
  onSelect(event:MouseEvent):void{

    const files = event.target['files'];
    for (let file of files) {
      if(this.isValidType(file.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (evnets: any) => {
          this.selectedUrls.push(evnets.target.result);
          this.selectedFiles.push(file);
        }
      }else{
        console.log("Warning : ","This image format not allow");
      }
    }
   
  }

  /**
   * @property {Function} onUpload - start upload to serve
   * @param {MouseEvent} - click event
   * @returns {void}
   */
  onUpload(event:MouseEvent):void{

    if(this.isMaxUploadCount()){

      const fd = new FormData();
      for (let file of this.selectedFiles){
        fd.append('images',file, file['name']);
      }

      //fd.append('datax','cc');

      this.http.post(this.apiUrl,fd,{
        reportProgress:true,
        observe:'events'
      }).subscribe(event=>{
        if(event.type === HttpEventType.UploadProgress){

          this.setUploadProgress(event.loaded/event.total);

        }else if(event.type === HttpEventType.Response){
          const res = event['body'];
          this.setUploadResponse(event);
          if(res && res['success']){
            this.setUploadProgress(0);
            this.setClearSelected();
            
          }else{
            console.log('Error',res['message']);
          }
        }else{
          console.log("other event :", event);
        }
      },
      error=>{
        console.log("Error", error['message'] );
      });

    }else{
      //this.toastr.warning('other error', 'Warning');
      console.log("Error",'other error');
    }
  }


  /**
   * @property {Function} onDismiss - dismiss image from select-to-upload
   * @param {MouseEvent} - click event
   * @returns {void}
   */
  onDismiss(event:MouseEvent):void{

    const imageTag = event.target['nextElementSibling'];
    for(let i in this.selectedUrls){
      const index = Number(i);
      if(this.selectedUrls[index] == imageTag.getAttribute('src') ){
          this.selectedUrls.splice(index, 1);
          this.selectedFiles.splice(index, 1);
          break;
      }
    }
    
  }


  /**
   * @property {Function} onClear - clear the all images from select-to-upload
   * @returns {void}
   */
   onClear():void{

    this.selectedUrls.length = 0;
    this.selectedFiles.length =0;
    
  }

  /* ********************************* */ 
  /** //////////  setters   \\\\\\\\\\ */ 
  /* ********************************* */ 

  /**
   * @property {Function} onDismiss - dismiss image from select-to-upload
   * @param {MouseEvent} - click event
   * @returns {void}
   */
  setUploadedImages(event:MouseEvent):void{
  
  }


  /** 
   * @property {Function} setUploadProgress - set upload progress
   * @param {number} - upload ratio count 
   * @returns {void}
   */
  setUploadProgress(ratio:number): void {
      this.uploadProgress = Math.round(ratio*100);
      //console.log(" uploadProgress :", this.uploadProgress, ratio);
  }

  /** 
   * @property {Function} setClearSelected - set pre view upload clear
   * @returns {void}
   */
  setClearSelected(): void {
      this.onClear();
  }

  /** 
   * @property {Function} setUploadResponse - send upload responce to parent component
   * @param {number} - upload ratio count 
   * @returns {void} - no returns
   */
  setUploadResponse(response:object): void {
    this.onResponse.emit(response);
  }

  /** 
   * @property {Function} setError - set error throw for developper
   * @param {string} - error message
   * @returns {void}
   */
  setError(error:string):void {
    throw new Error(error);
  }

}

