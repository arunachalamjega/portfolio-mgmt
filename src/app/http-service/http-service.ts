import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ConfigService {
  constructor(private http: Http) { }


  register(usermodel) {
    let body = JSON.stringify({ usermodel });            
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     console.log(JSON.stringify(usermodel));
     this.http.post('/api/register',JSON.stringify(usermodel),{headers:headers});     
  }

}