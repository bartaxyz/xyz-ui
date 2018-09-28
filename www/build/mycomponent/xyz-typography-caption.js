/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZTypographyParagraph {
    render() {
        return h("slot", null);
    }
    static get is() { return "xyz-typography-caption"; }
    static get style() { return "xyz-typography-headline,\nxyz-typography-paragraph,\nxyz-typography-caption {\n	font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif;\n	-webkit-font-smoothing: antialiased;\n}\n\nxyz-typography-headline {\n	background: red;\n	display: block;\n}\n\n:host h1,\n:host h2,\n:host h3,\n:host h4,\n:host h5,\n:host h6 {\n	line-height: 1em;\n	margin-top: 0.5em;\n	margin-bottom: 0.5em;\n}\n\nxyz-typography-headline:host h1,\nxyz-typography-headline:host h2 {\n	font-weight: 400;\n}\n\nxyz-typography-headline:host h3,\nxyz-typography-headline:host h4,\nxyz-typography-headline:host h5,\nxyz-typography-headline:host h6 {\n	font-weight: 500;\n}\n\nxyz-typography-headline:host h1 {\n	font-size: 6rem;\n}\nxyz-typography-headline:host h2 {\n	font-size: 3.75rem;\n}\nxyz-typography-headline:host h3 {\n	font-size: 3rem;\n}\nxyz-typography-headline:host h4 {\n	font-size: 2.125rem;\n}\nxyz-typography-headline:host h5 {\n	font-size: 1.5rem;\n}\nxyz-typography-headline:host h6 {\n	font-size: 1.25rem;\n}\n\nxyz-typography-paragraph {\n	display: block;\n}\n\nxyz-typography-caption {\n	display: inline;\n	font-size: 0.6875rem;\n}"; }
}

export { XYZTypographyParagraph as XyzTypographyCaption };
