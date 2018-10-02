# Getting Started

## Plain JS

If you're using a simple HTML page, you can add your component via a script tag. For example, if we published a component to npm, we could load the component through unpkg like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/xyz-ui/latest/dist/xyz.js"></script>
  </head>
  <body>
    <xyz-typography-headline>Headline</xyz-typography-headline>
  </body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module">
      import { defineCustomElements } from 'https://unpkg.com/xyz-ui/latest/dist/esm/es2017/xyz.define.js';
      defineCustomElements(window);
    </script>
  </head>
  <body>
    <xyz-typography-headline>Headline</xyz-typography-headline>
  </body>
</html>
```

Examples and text were taken from [Stencil Docs - Components without a Framework](https://stenciljs.com/docs/javascript) and slightly edited to fit XYZ UI context.

## Vue

In order to use XYZ UI within the Vue app, the application must be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the main.js file. For example:

```javascript
import Vue from "vue";
import App from "./App.vue";
import { defineCustomElements } from "xyz-ui";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/xyz-\w*/];

defineCustomElements(window);

new Vue({
  render: h => h(App)
}).$mount("#app");
```

Vue provides several different ways to install and use the framework in an application. The above technique for integrating a Stencil custom element library has been tested on a Vue application that was created using the vue-cli with ES2015 and WebPack as primary options. A similar technique should work if the application was generated using other options.

Examples and text were taken from [Stencil Docs - Vue](https://stenciljs.com/docs/vue) and slightly edited to fit XYZ UI context.

## React

With an application built using React the easiest way to include the component library is to call `defineCustomElements(window)` after `ReactDOM.render`.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { defineCustomElements } from 'xyz-ui';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
defineCustomElements(window);
```

After this step, you'll be able to use XYZ UI in react as web components. For more info, read the [Web Components - React](https://reactjs.org/docs/web-components.html) guide.

Examples and text were taken from [Stencil Docs - React](https://stenciljs.com/docs/react) and slightly edited to fit XYZ UI context.

## Angular

Using a XYZ UI web component collection within an Angular CLI project is a two-step process. We need to:

1. Include the `CUSTOM_ELEMENTS_SCHEMA` in the modules that use the components
2. Call `defineCustomElements(window)` from `main.ts` (or some other appropriate place)

### Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors. Here is an example of adding it to AppModule:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom elements.

### Calling `defineCustomElements(window)`

A component collection of XYZ UI includes a main function that is used to load the components in the collection. That function is called `defineCustomElements()` and it needs to be called once during the bootstrapping of your application. One convenient place to do this is in `main.ts` as such:

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from 'xyz-ui';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);
```

Examples and text were taken from [Stencil Docs - Angular](https://stenciljs.com/docs/angular) and slightly edited to fit XYZ UI context.
