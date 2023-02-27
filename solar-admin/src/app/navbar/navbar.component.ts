import { Component } from '@angular/core';
import { TableService } from '../table/TableServices/table.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchedValue:any;
  searchedLastValue:any;
  searchedEmail:any

  constructor(private tableService:TableService){}
  removeToken(){
    localStorage.removeItem('formdata')
  }

  search(){
    this.tableService.changeTable(this.searchedValue)
  }

  searchByLastName(){
    this.tableService.changeTableAfterLastName(this.searchedLastValue)
  }

  searchByEmail(){
    this.tableService.changeTableAfterEmail(this.searchedEmail)
  }


}
