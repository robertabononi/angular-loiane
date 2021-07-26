import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  files!: Set<File>;
  sub!: Subscription;

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
  }

  onUpload() {
    if(this.files && this.files.size > 0) {
      this.sub = this.service.upload(this.files, 'http://localhost:8000/upload')
        .subscribe(response => console.log('Upload concluído'));
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
