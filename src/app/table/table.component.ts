import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TableService } from './TableServices/table.service';

// export interface UserElement{
//   position:number;
//   name:string;
//   email:string;
// }

// const ELEMENT_DATA:UserElement[]=[
//   { position: 1, name: 'Zara', email: 'zara@gmail.com'},
//   { position: 2, name: 'John', email: 'john@gmail.com' },
//   { position: 3, name: 'Anna', email: 'anna@gmail.com' },
//   { position: 4, name: 'Aru', email: 'aru@gmail.com' },
//   { position: 5, name: 'Rakesh', email: 'rakesh@gmail.com' },
//   { position: 6, name: 'Karan', email: 'karan@gmail.com' },
//   { position: 7, name: 'Smita', email: 'smita@gmail.com' },
//   { position: 8, name: 'Dheeraj', email: 'dheeraj@gmail.com' },
//   { position: 9, name: 'Shia', email: 'shia@gmail.com' },
//   { position: 10, name: 'Sam', email: 'sam@gmail.com' }
// ];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  table: any = [];
  ELEMENT_DATA: any = []
  dataSource: any;
  selectedOption: any = 10;
  SearchedTable: any=[]
  searchedResponse: any=[];
  SearchedByLastName: any;
  SearchedByEmail: any;



  constructor(private table_service: TableService, private route: ActivatedRoute) { }

  ngOnInit(): any {
    this.getTable();

    this.table_service.$search.subscribe(res => {
      debugger
    this.SearchedTable = res
    console.log(this.SearchedTable);
    this.changeTableOnSearch()
    })


    this.table_service.$searchByLastName.subscribe(res => {
      debugger
    this.SearchedByLastName = res
    console.log(this.SearchedByLastName);
    this.changeTableOnSearch()
    })


    this.table_service.$searchByEmail.subscribe(res => {
      debugger
    this.SearchedByEmail = res
    console.log(this.SearchedByEmail);
    this.changeTableOnSearch()
    })

  
  
  }
  SearchedKeyObj={
    firstName:"",
    lastName:"",
    email:""
  }

  changeTableOnSearch(){
    this.SearchedKeyObj={
      firstName: this.SearchedTable,
      lastName: this.SearchedByLastName,
      email: this.SearchedByEmail
    }
    this.table_service.Search(this.SearchedKeyObj).subscribe(res=>{
      debugger
      this.searchedResponse=res
      this.table=null;
      this.table=this.searchedResponse.content
      if(this.searchedResponse != 0){
        this.dataSource = new MatTableDataSource(this.table)
      }
      console.log(this.table);
      
    })
  }

  // title = 'angular-paginator';
  // displayedColumns:string[]=['position','name','email'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA) ;

  // @ViewChild(MatPaginator) paginator!:MatPaginator;

  // ngAfterViewInit(){
  //   this.dataSource.paginator = this.paginator;
  // }

  sendData(obj: any) {
    localStorage.setItem('table_row', JSON.stringify(obj));

  }

  displayedColumns: string[] = ['name', 'email', 'adress', 'area', 'details'];
  // dataSource = new MatTableDataSource(this.ELEMENT_DATA) ;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    debugger
    this.dataSource.paginator = this.paginator;
  }

  getDropdownPage() {
    debugger
    console.log(this.selectedOption);
    this.table_service.getTableData(0, this.selectedOption).subscribe(response => {
      this.table = response
      this.table = this.table.content;
      this.dataSource = new MatTableDataSource(this.table)
      console.log(this.table);
      this.pageNumber = 0
      this.PageSize = this.selectedOption;
      this.getTable()
    })
  }

  pageNumber: number = 0
  PageSize: number = 10
  totalPageNumber: number = 1;
  getFirst: any;
  getLast: any;

  getTable() {
    this.table_service.getTableData(this.pageNumber, this.PageSize).subscribe(response => {
      this.table = response
      // debugger

      this.getFirst = this.table.first;
      this.getLast = this.table.last;
      console.log(this.getFirst + " " + this.getLast);

      this.totalPageNumber = this.table.totalPages
      this.table = this.table.content;

      this.dataSource = new MatTableDataSource(this.table)
      console.log(this.table);


      
    })

  }




  goToward() {
    debugger
    if (this.getFirst == false) {
      this.pageNumber--;
      this.getTable()
    }
  }

  forward() {
    if (this.getLast == false) {
      this.pageNumber++;
      this.getTable()
    }
  }

  




}

