import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'tl-text-container',
  templateUrl: './text-container.component.html',
  styleUrls: ['./text-container.component.css']
})
export class TextContainerComponent implements OnInit {
  @Input() text: string;
  @Input() textStringNumber: number;
  needToOpenToolTip = false;
  tooltipOpened = false;

  constructor() { }

  @HostListener('mouseover', ['$event']) onMouseHover(event: MouseEvent) {
    if (this.tooltipOpened) {
      return;
    } else {
      setTimeout(() => this.openToolTip() , 100);
    }
  }
  @HostListener('mouseleave') hideTooltip() {
    setTimeout(() => this.tooltipOpened = false, 100);
  }
  openToolTip() {
    this.tooltipOpened = true;
  }
  createClone(){
    const lineHeight = 20;
    const boxHeight = this.textStringNumber * lineHeight  ;
    const box = document.querySelector('.box');
    const clone = document.createElement('div');
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.lineHeight = lineHeight + 'px';
    clone.style.width = box.clientWidth + 'px';
    clone.innerHTML = this.text;
    document.body.appendChild(clone);
    if (clone.clientHeight > boxHeight){
      for (let l = this.text.length - 1; l >= 0 && clone.clientHeight > boxHeight; --l) {
        clone.innerHTML = this.text.substring(0, l) + '...';
      }
      box.innerHTML = clone.innerHTML;
      this.needToOpenToolTip = true;
    }
  }

  ngOnInit() {
    this.createClone();
  }

}
