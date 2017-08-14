import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ServiceDataService } from './service-data.service';
import { ReadMoreComponent } from './read-more/read-more.component'
import { Data } from './data'
@Component({
  selector: 'app-root',
  providers:[ServiceDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('textContent') textContent:ElementRef;
  articles;
  loadText:boolean=false;
  countText:number=250;
  showOrHideImage:boolean=false;
  isShow:boolean=true;
  myFontSize:number;
  constructor(private servicesDataServices:ServiceDataService){ }
  
  ngOnInit(){
    this.articles=this.servicesDataServices.getData();
    console.log(this.textContent)
  }
  
  onChnageFontSize(event) {
    this.myFontSize
  }

  onLoadText(loadText){
    if(!this.loadText){
      this.loadText=true
    }
    else{this.loadText=false}
  }
  showHideImage(){
     if(this.showOrHideImage){
       this.showOrHideImage=false;
       this.isShow=false
     }
      else{this.showOrHideImage=true;
           this.isShow=true}
  }

  categories:any[] = [
   {id:1,name:'orange'},
   {id:2,name:'blue'},
   {id:3,name:'grey'},
   {id:4,name:'pink'},
];
color;
backgound
getValueFromSelect(value) {
 this.color=value
 console.log(this.color);
}
}
