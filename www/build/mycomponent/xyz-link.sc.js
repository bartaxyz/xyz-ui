/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZLink {
    render() {
        return (h("a", { href: this.to || this.href, download: this.download, hreflang: this.hreflang, rel: this.rel, target: this.target },
            h("slot", null)));
    }
    static get is() { return "xyz-link"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "download": {
            "type": String,
            "attr": "download"
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "hreflang": {
            "type": String,
            "attr": "hreflang"
        },
        "rel": {
            "type": String,
            "attr": "rel"
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "to": {
            "type": String,
            "attr": "to"
        }
    }; }
    static get style() { return "\n.sc-xyz-link-h   a.sc-xyz-link {\n  color: currentColor;\n  font-weight: 400;\n  text-decoration: underline; }\n"; }
}

export { XYZLink as XyzLink };
