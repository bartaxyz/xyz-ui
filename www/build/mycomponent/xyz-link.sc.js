/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZLink {
    render() {
        console.log(this.setAttribute);
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
    static get style() { return "xyz-link {\n	all: unset;\n}\n\nxyz-link a {\n	color: currentColor;\n	font-weight: 400;\n}"; }
}

export { XYZLink as XyzLink };
