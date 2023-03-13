import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    //user defined event

    @Output() ontoggles= new EventEmitter()


    sidebartoggle(){
  
      this.ontoggles.emit()
      
      //to resize elements in window 
  
      setTimeout(()=>{
        window.dispatchEvent(
          new Event('resize')
        )},100)
     
    }
}
