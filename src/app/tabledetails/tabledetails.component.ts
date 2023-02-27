import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../table/TableServices/table.service';

@Component({
  selector: 'app-tabledetails',
  templateUrl: './tabledetails.component.html',
  styleUrls: ['./tabledetails.component.css']
})
export class TabledetailsComponent {
  tableDetails: any;
  id:any

  constructor(private table_service: TableService ,private route: ActivatedRoute){}

  ngOnInit(): any {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTableById(parseInt(this.id))

  }

  
  getTableById(id:any){
    this.table_service.getTableRowById(id).subscribe(res=>{
      debugger
      this.tableDetails=res
      console.log(this.tableDetails.attachment);
      
    })
  }

}
