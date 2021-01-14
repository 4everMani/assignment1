import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserServices } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserServices]
  
})
export class AppComponent implements OnInit {
  users : User[]=[]
  userNumber : number
  constructor(private userService : UserServices){};

  ngOnInit(){
    console.log(`hello $(this.userService.users)`)
    
    this.users = this.userService.users
    console.log(this.userService.users.values);
  }

  

  
  
}
