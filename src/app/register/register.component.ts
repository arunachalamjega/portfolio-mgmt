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
  user = new User('','','','Mr.','','','','','',0,'','','','Y','');
  submitted = false;
  salutations = ['Mr.','Mrs.'];
  
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
    this.user = new User('','','','Mr.','','','','','',0,'','','','Y','');
    this.httpService.asyncServiceCall(this.user).then(
        function(result){console.log("Response:"+result)},
        function(error){console.log("Error:"+error)});    
  }
  
  ngOnInit() {
  }

  saveUser(){    
    var suc;
    var err;
    console.log(this.user);
    this.user.userName='inboxofarun';
    this.httpService.syncServiceCall(this.user,suc,err);    
  }

}
