import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {ConfigService} from '../http-service/http-service'

@Component({
  selector: 'app-register',
  templateUrl: './register-component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [ConfigService]
})
export class RegisterComponent implements OnInit {

  
  public name: string;
  public  email: string;
  usermodel = new User('','','Mr.','','','','','',0,'','','',false);
  submitted = false;
  surnames = ['Mr.','Mrs.'];
  
  

 
  onSubmit() { 
    this.submitted = true; 
    this.saveUser();
  }
  onReset(){
    console.log("Reset");
    this.usermodel = new User('','','Mr.','','','','','',0,'','','',false);
    
  }
  constructor(private cs :ConfigService ) {    
  }

  ngOnInit() {
  }

  saveUser(){    
    console.log(this.usermodel);
    this.cs.register(this.usermodel);
  }

}
