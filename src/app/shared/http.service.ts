import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {  
    constructor(private http:HttpClient) {
     }
     sendEMail(url,data){
        return this.http.post(url,data);
     }

  }