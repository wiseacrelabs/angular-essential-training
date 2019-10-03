// But decorator is an expression that evaluates to a function that makes it
// possible Angular has a bunch of decorators and then a pair of parentheses.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';

@NgModule( {
  // The imports property is used to bring in other angular modules that your module will need
  imports: [
    BrowserModule
  ],
  // The declarations property is used to make components, directives, and and pipes available to your module that don't come from another module
  declarations: [
    AppComponent,
    MediaItemComponent
  ],
  // The bootstrap property is used for a root module and will let angular know which component or components
  // will be the starting point for the bootstrap process -- the entry point
  bootstrap: [
    AppComponent
  ]
 })

 // So from here you follow it up with a class definition for the angular module.
 export class AppModule {}
