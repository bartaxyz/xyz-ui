/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZTypographyCaption {
    render() {
        return h("slot", null);
    }
    static get is() { return "xyz-typography-caption"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n	font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif;\n	-webkit-font-smoothing: antialiased;\n	display: inline;\n	font-size: 0.6875rem;\n	text-decoration: inherit;\n}\n\n:host slot {\n	text-decoration: inherit;\n}"; }
}

export { XYZTypographyCaption as XyzTypographyCaption };
