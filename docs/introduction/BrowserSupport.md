# Browser Support

XYZ UI is built on top of Web Components specifications. All of the components are thus native or polyfilled by Stencil compiler tool.

The only exception is that this UI framework uses [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) which are not available in any version of IE.

> Web Components are a set of standardized browser APIs centered around the Custom Elements v1 spec, a cross-browser way to define and create essentially new HTML tags, and is the successor to the now-defunct v0 spec.
>
> Custom Elements are natively supported in Chrome and Safari (including iOS!) and are coming to both Edge and Firefox. In fact, Firefox has native support behind a flag, indicating full native support is near.
>
> For browsers without native support, a small polyfill helps developers use Custom Elements seamlessly and with little performance overhead.
>
> Stencil uses a dynamic loader to load the custom elements polyfill only on browsers that need it. With this polyfill Stencil's browser support is Chrome (and all chrome based browsers), Safari, Firefox, Edge, and IE11.
>
> Web Components are being used in production today with the above approach.

More information on [Stencil Docs - Browser Support](https://stenciljs.com/docs/browser-support)
