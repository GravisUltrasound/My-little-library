import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextTooltipComponent } from './text-tooltip/text-tooltip.component';



@NgModule({
  declarations: [TextTooltipComponent],
  exports: [
    TextTooltipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TextTooltipModule { }
