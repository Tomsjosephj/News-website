import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  allnews:any

  constructor(private api:ServicesService){}
  ngOnInit(): void {
    this.api.getnews()
    .subscribe((result:any)=>{
      console.log(result);

      this.allnews=result.articles
      
    })
  }


 





}
