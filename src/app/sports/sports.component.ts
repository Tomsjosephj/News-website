import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  allsports:any

  constructor(private api:ServicesService){

  }
  ngOnInit(): void{
  
    this.api.getsports()
    .subscribe((result:any)=>{

      this.allsports=result.articles

    })
  
  }



}
