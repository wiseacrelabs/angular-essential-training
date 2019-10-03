// To build an angular component, you need to use the component decorator on a class.
// The component decorator comes from the core scope package in angular.
// So, we can add import statement for the component decorator from
// the angular core scope package at the top of this file.
// And then we can call the decorator, using the app component syntax with
// the parentheses.

import { Component } from '@angular/core';

// And then we can call the decorator, using the app component syntax with the parentheses.
// To decorate a component, you need to provide two metadata properties at a minimum. Selector and template or template url.
@Component({
  // We will pass in an object literal inside the component decorator parenthesis and for now we will set
  // the selector property to the string value of app-root and we'll set the template property to a string with the html h1 tag.
  // The selector property is what angular will use to locate a custom html element and apply the component to.

  // The index.html file in the project has a custom html element named app-root in it. So, this selector will target that.
  // Angular.io recommends that selectors get prefixed for your app or feature. Since this is the Media Watch app, let's use a prefix of mw.
  //selector: 'app-root',
  selector: 'mw-app',

  // Angular will use the template property content to fill the inner html of the targeted custom element when it processes it.
  // Use back ticks to be able to write our style content on multiple lines.
  // template: '<h1>My App</h1>'

  // This property allows us to specify a file that contains the template content.
  // Angular will load the file and do the same content rendering.
  // Set this property equal to the relative path of the template component.html
  templateUrl: './app.component.html',

  // Add the styles property to the object literal we are passing into our component decorator,
  // this takes an array so we can use the JavaScript array syntax of the double braces,
  // and in the braces, we can set up our style content via strings.

  // Use back ticks to be able to write our style content on multiple lines.
  //  styles: [`
  //    h1 { color: #ffffff; }
  //    .description {
  //      font-style: italic;
  //     color: green;
  //    }
  //  `]

  styleUrls: ['./app.component.css']
})

// Then, we need to export a class for the component.
export class AppComponent {}

// We have the app component with its metadata configured for the selector and the template URL, let's see what we can do about giving it some style.

