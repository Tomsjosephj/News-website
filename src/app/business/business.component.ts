import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
   allbusiness:any
  constructor(private api:ServicesService){

  }
  ngOnInit(): void {
    this.api.getbusiness()
    .subscribe((result:any)=>{
      console.log(result);
      
      this.allbusiness=result.articles
    })
  }

}
