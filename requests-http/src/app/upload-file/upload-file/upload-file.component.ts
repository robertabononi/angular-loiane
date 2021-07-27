import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';
import { environment } from 'src/environments/environment';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  files!: Set<File>;
  sub!: Subscription;
  progress = 0;

  constructor(private service: UploadFileService) { }

  ngOnInit() {
  }

  onChange(event: any) {
    console.log(event)

    const selectedFiles = <FileList>event.srcElement.files;
    const output = document.getElementById('formFileMultiple');
    /* if (output) {
      output.innerHTML = selectedFiles[0].name;
    } */

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    if (output) {
      output.innerHTML = fileNames.join(', ');
    }

    this.progress = 0;
  }

  onUpload() {
    if(this.files && this.files.size > 0) {
      this.sub = this.service.upload(this.files, `${environment.BASE_URL}/upload`)
        .pipe(
          uploadProgress(progress => {
            console.log(progress);
            this.progress = progress;
          }),
          filterResponse()
        )
        .subscribe(response => console.log('Upload concluído'))
      ;
      /* .subscribe((event: HttpEvent<Object>) => {
          //console.log(event);

          if (event.type == HttpEventType.Response) {
            console.log('Upload concluído');
          } else if (event.type == HttpEventType.UploadProgress) {
            const percentDone = Math.round((event.loaded * 100) / event.total!);
            //console.log('Progresso: ', percentDone);
            this.progress = percentDone;
          }
        })
      ; */
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
