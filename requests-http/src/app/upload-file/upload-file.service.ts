import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string) {

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));

    //const request = new HttpRequest('POST', url, formData);
    //return this.http.request(request);

    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    })
  }

  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob' as 'json',
      //reportProgress
    })
  }

  handleFile(res: any, fileName: string) {
    const file = new Blob([res], {
      type: res.type
    });

    //IE - só é executado no navegador Internet Explorer
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');

    link.href = blob;
    link.download = fileName;

    //link.click(); - não funciona nas versões mais atuais do firefox
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }));

    //Chrome não precisa do setTimeOut. É usado para que funcione no Firefox/IE.
    setTimeout(() => {
      window.URL.revokeObjectURL(blob);
      link.remove;
    }, 100);
  };
}
