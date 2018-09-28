/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZLink {
    render() {
        return (h("a", { href: this.to },
            h("slot", null)));
    }
    static get is() { return "xyz-link"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "to": {
            "type": String,
            "attr": "to"
        }
    }; }
    static get style() { return "\n.sc-xyz-link-h   a.sc-xyz-link {\n	color: currentColor;\n	font-weight: 400;\n	text-decoration: underline;\n}\n"; }
}

export { XYZLink as XyzLink };
