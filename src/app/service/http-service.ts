import { Injectable } from '@angular/core';
import { Headers, Response,Http,RequestOptionsArgs,RequestMethod,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../user';
import { Request } from '@angular/http/src/static_request';


@Injectable()
export class HttpService {


    private  requestOptions :RequestOptionsArgs = 
    {
    url: '',
    method: RequestMethod.Get,
    search: null,
    headers: new Headers({'trustme':true}),
    body: null
    };    


  constructor(private http:Http) { }
  
  

  asyncServiceCall(data) 
  {
    let promise = new Promise((resolve,reject) =>{
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    var payload = JSON.stringify(data);
    this.requestOptions.headers = header;
    this.requestOptions.body=payload;
    this.requestOptions.method=RequestMethod.Post;
    this.requestOptions.url='http://localhost:3000/api/register';
    var options = new RequestOptions(this.requestOptions);
    
    this.http.request("http://localhost:3000/api/register",options)
                  .toPromise()
                  .then(
                  res =>
                  {
                  console.log(res.json().results);                                   
                  resolve(res.json().results);
                 },
                 msg =>{
                 console.log(msg.json());                         
                 reject(msg);
                }
              );
              });            
            return promise;
  }
  
  syncServiceCall( data, success,error){          
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    var payload = JSON.stringify(data);
    this.requestOptions.headers = header;
    this.requestOptions.body=payload;
    this.requestOptions.method=RequestMethod.Post;
    this.requestOptions.url='http://localhost:3000/api/register';
    var options = new RequestOptions(this.requestOptions);
    this.http.request("http://localhost:3000/api/register",options).
                subscribe(suc =>{
                  console.log(suc);                 
                  success=suc;                  
              },
              err =>{
                console.log(err);        
                error=err;
              });
    
  }

}