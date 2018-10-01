/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZTypographyParagraph {
    render() {
        return (h("p", null,
            h("slot", null)));
    }
    static get is() { return "xyz-typography-paragraph"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n  font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased; }\n\n:host {\n  display: block; }"; }
}

export { XYZTypographyParagraph as XyzTypographyParagraph };
