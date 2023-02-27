import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../table/TableServices/table.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  leads:any=[]
  getLength:any;

  constructor(private table_service: TableService ,private route: ActivatedRoute){}

  ngOnInit():any{


    this.table_service.TotalLeads().subscribe(response=>{
      this.leads = response
      
      
    })
  }
}
