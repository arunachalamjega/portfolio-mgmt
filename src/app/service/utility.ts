import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


export class Utility {

    constructor(private http: HttpClient) { }

    public registerUser(model){
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        console.log("Output");
        this.http.post('/user',model,{headers: headers}).subscribe();
        
    }

}
    