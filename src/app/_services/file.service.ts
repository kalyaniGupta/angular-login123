import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FileService {
  constructor(private http: HttpClient) {}

  fileUpload(files: File[]) {
    var formData = new FormData();
    Array.from(files).forEach((f) => formData.append('file', f));
    this.http.post('https://file.io', formData).pipe(
      map((data) => {
        return true;
      })
    );
  }
}
