import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import {HttpService} from './service/http-service';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register user' }
  }  
];

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent],
  imports: [BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
