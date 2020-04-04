import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextContainerComponent } from './text-container/text-container.component';



@NgModule({
  declarations: [
    TextContainerComponent
  ],
  exports: [
    TextContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TextContainerModule { }
