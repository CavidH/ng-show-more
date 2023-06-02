import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ShowMoreModule} from "../../projects/ng-show-more-component/src/lib/show-more.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowMoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
