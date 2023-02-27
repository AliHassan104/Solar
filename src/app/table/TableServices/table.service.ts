import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  url = "http://localhost:8081/api/solar-form/";
  leadApi = "http://localhost:8081/api/solar-form/count";

  constructor(private http: HttpClient) { }

  _getTableData(){
    return this.http.get(this.url+"?pageNumber=0&pageSize=10")
  }

  getTableData(pageNumber: number , pageSize: number){
    return this.http.get(this.url+"?pageNumber="+pageNumber+"&pageSize="+pageSize)
  }

  getTableRowById(id:any){
    return this.http.get(this.url+id)
  }

  Search(obj:any){
    // return this.http.get(this.url+"search"+"?firstName="+obj.lastName+"&lastName="+obj.firstName);
    return this.http.get(this.url+"search"+"?firstName="+obj.firstName+"&lastName="+`${obj.lastName==0?"":obj.lastName}`+"&email="+`${obj.email==0?"":obj.email}`);

  }

  TotalLeads(){
    return this.http.get(this.leadApi)
  }
  private search=new BehaviorSubject("");
  $search = this.search.asObservable();

  private searchByLastName=new BehaviorSubject("");
  $searchByLastName = this.searchByLastName.asObservable();

  private searchByEmail=new BehaviorSubject(0);
  $searchByEmail = this.searchByEmail.asObservable();

  changeTable(data:any){
    this.search.next(data)
  }


  changeTableAfterLastName(data1:any){
    this.searchByLastName.next(data1)
  }

  changeTableAfterEmail(data2:any){
    this.searchByEmail.next(data2)
  }
  
}
