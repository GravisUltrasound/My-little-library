import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'tl-text-tooltip',
  templateUrl: './text-tooltip.component.html',
  styleUrls: ['./text-tooltip.component.css']
})
export class TextTooltipComponent implements OnInit, AfterViewInit {
  @Input() text: string;
  @Input() textStringNumber: number;
  @ViewChild('height') nameParagraph: ElementRef;
  firstTextHeight: number;
  textHeight: number;
  ellipsisAreNeed: boolean;

  constructor() { }

  ellipsisControl(){
   this.firstTextHeight = this.nameParagraph.nativeElement.offsetHeight;
   const textHeight = this.calculateTextHeight();
   if (textHeight < this.firstTextHeight) {
     this.textHeight = textHeight;
     this.ellipsisAreNeed = true;
   } else {
     this.textHeight = this.firstTextHeight;
     this.ellipsisAreNeed = false;
   }
  }
  calculateTextHeight(){
    return this.textStringNumber * 20;
  }
  ngAfterViewInit() {
    this.ellipsisControl();
  }
  ngOnInit() {
  }

}
