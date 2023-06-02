import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMoreComponent } from './show-more.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ShowMoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShowMoreComponent
    ]
})
export class ShowMoreModule { }
