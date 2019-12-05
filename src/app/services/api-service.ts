import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {  
    constructor(private http:HttpClient) {
     }
     getCourses(){
        return this.http.get("../data/courses.json");
     }
     sendEmail(url,data){
      return this.http.post(url,data);
     }
  }