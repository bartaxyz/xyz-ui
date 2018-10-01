/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZTypographyParagraph {
    render() {
        return (h("p", null,
            h("slot", null)));
    }
    static get is() { return "xyz-typography-paragraph"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "\n.sc-xyz-typography-paragraph-h {\n  font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased; }\n\n.sc-xyz-typography-paragraph-h {\n  display: block; }\n"; }
}

export { XYZTypographyParagraph as XyzTypographyParagraph };
