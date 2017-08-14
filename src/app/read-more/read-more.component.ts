import { Component, Input, ElementRef, AfterViewInit, OnChanges, Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'read-more',
    template: `
        <div [innerHTML]="currentText" [ngStyle]="{'font-size':font_size+px}"></div>
        <a [class.hidden]="hideToggle" (click)="toggleView()">Read {{isCollapsed? 'more':'less'}}</a> 
        <div><button class="btn" (click)="increase()">Increase</button><button class="btn" (click)="decrease()">Decrease</button></div> 
        <ng-content></ng-content>
    `,
    styles: [`

    `]
})
export class ReadMoreComponent implements OnChanges  {

    @Input() text: string;
    @Input() maxLength: number = 200;
    @Output() change= new EventEmitter<number>();
    
    
    px:string='px'
    font_size : number = 16;
    showHidePic:boolean=false;
    currentText: string;
    hideToggle: boolean = true;

    public isCollapsed: boolean = true;

    constructor(private elementRef: ElementRef) {    }
    
    increase(){
      this.font_size++;
      this.change.emit(this.font_size)
      if(this.font_size>30){
          this.font_size=16
      }
      console.log(this.font_size)
    }
    decrease(){
      this.font_size--;
      this.change.emit(this.font_size)
      if(this.font_size<12){
          this.font_size=16
      }
      console.log(this.font_size)
    }

    toggleView() {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    }
    determineView() {
        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed == true) {
            this.currentText = this.text.substring(0, this.maxLength) + "...";
        } else if(this.isCollapsed == false)  {
            this.currentText = this.text;
        }

    }
    ngOnChanges() {
        this.determineView();       
    }
}