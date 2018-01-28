import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BloggerComponent } from './blogger/blogger.component';
import { BloggerService } from './blogger.service';


@NgModule({
  declarations: [
    AppComponent,
    BloggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BloggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
