import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class ApiService {  
   private items;
    constructor(private http:HttpClient) {
     }
     sendEmail(url,data){
      return this.http.post(url,data);
     }
     }