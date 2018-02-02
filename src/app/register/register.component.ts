import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpService} from '../service/http-service'

@Component({
  selector: 'app-register',
  templateUrl: './register-component.html',
  styleUrls: ['./register-form.component.css'],
  providers: []
})
export class RegisterComponent implements OnInit {

  
  public name: string;
  public  email: string;
  usermodel = new User('','','Mr.','','','','','',0,'','','',false);
  submitted = false;
  surnames = ['Mr.','Mrs.'];
  
  constructor(private httpService :HttpService ) {    
  }


 
  onSubmit() { 
    this.submitted = true; 
    this.saveUser();
  }
  onReset(){
    var err;
    var suc;
    console.log("Reset");
    this.usermodel = new User('','','Mr.','','','','','',0,'','','',false);
    this.httpService.asyncServiceCall(this.usermodel).then(
        function(result){console.log("Response:"+result)},
        function(error){console.log("Error:"+error)});    
  }
  
  ngOnInit() {
  }

  saveUser(){    
    console.log(this.usermodel);    
  }

}
