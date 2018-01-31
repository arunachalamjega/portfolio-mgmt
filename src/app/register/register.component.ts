import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Utility } from '../service/utility';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterComponent implements OnInit {

  
  public name: string;
  public  email: string;
  usermodel = new User('','','Mr.','','','','','',0,'','','',false);
  submitted = false;
  surnames = ['Mr.','Mrs.'];
  util = new Utility();
 
  onSubmit() { 
    this.submitted = true; 
    this.saveUser();
  }
  onReset(){
    console.log("Reset");
    this.usermodel = new User('','','Mr.','','','','','',0,'','','',false);
    
  }
  constructor() {    
  }

  ngOnInit() {
  }

  saveUser(){    
    console.log(this.usermodel);
    this.util.registerUser(this.usermodel);
  }

}
