import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsUser } from 'src/app/models/user-module/us-user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit{
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  
  constructor(private user_service: UserService){
  }

  ngOnInit(): void {
    this.user_service.getUsers().subscribe(res =>{
      console.log(res)
    });
  }

}
