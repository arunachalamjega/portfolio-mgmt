import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {ConfigService} from './http-service/http-service';

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register user' }
  }  
];

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent],
  imports: [BrowserModule, AppBoostrapModule,  FormsModule,HttpClientModule,RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
