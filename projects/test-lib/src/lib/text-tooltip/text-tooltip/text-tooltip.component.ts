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
  textHeight: number;
  constructor() { }
  heightControl(){
   const firstTextHeight = this.nameParagraph.nativeElement.offsetHeight;
   const textHeight = this.calculateTextHeight();
   if (textHeight < firstTextHeight) {
     for (let l = this.text.length - 1; l >= 0 && this.nameParagraph.nativeElement.offsetHeight > textHeight; --l) {
       this.nameParagraph.nativeElement.innerText = this.text.substring(0, l) + '...';
     }
   } else {
     this.textHeight = firstTextHeight;
   }
  }
  calculateTextHeight(){
    return this.textStringNumber * 20;
  }
  ngAfterViewInit() {
    this.heightControl();
  }
  ngOnInit() {
  }

}
