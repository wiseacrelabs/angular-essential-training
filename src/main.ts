// With an Angular root module and a starting component created the
// next step to getting the foundation of an Angular app up and running is the
// code to Bootstrap the module.

// Angular exports a function named Platform Browser Dynamic that can be used for
// targeting the browser and that comes from the platform-Browser-Dynamic scope package.

// This function returns a platform object that has a bootstrap module function on it.
// That is the function you will use to bootstrap your root module on the platform.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Okay so now we can make the call to the platform-Browser-Dynamic function.
// And off of that platform-Browser-Dynamic call using a period we can call bootstrap module.
// This function is expecting a root module and we have one already created from earlier named App Module.
// We can pass the app module type into the bootstrap module function call here.

// And we need to import that so we can go up and write it in import statement to load that type into this file.
platformBrowserDynamic().bootstrapModule(AppModule);
