import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tl-text-tooltip',
  templateUrl: './text-tooltip.component.html',
  styleUrls: ['./text-tooltip.component.css']
})
export class TextTooltipComponent implements OnInit {
  @Input() text: string;
  @Input() textStringNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
