/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZTypographyHeadline {
    render() {
        if (this.level === 1) {
            return (h("h1", null,
                h("slot", null)));
        }
        else if (this.level === 2) {
            return (h("h2", null,
                h("slot", null)));
        }
        else if (this.level === 3) {
            return (h("h3", null,
                h("slot", null)));
        }
        else if (this.level === 4) {
            return (h("h4", null,
                h("slot", null)));
        }
        else if (this.level === 5) {
            return (h("h5", null,
                h("slot", null)));
        }
        else if (this.level === 6) {
            return (h("h6", null,
                h("slot", null)));
        }
        else {
            throw new Error('Attribute "level" needs to be a number from 1 to 6');
        }
    }
    static get is() { return "xyz-typography-headline"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "level": {
            "type": Number,
            "attr": "level"
        }
    }; }
    static get style() { return ":host {\n	font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif;\n	-webkit-font-smoothing: antialiased;\n	display: block;\n}\n\n:host h1,\n:host h2,\n:host h3,\n:host h4,\n:host h5,\n:host h6 {\n	line-height: 1em;\n	margin-top: 0.5em;\n	margin-bottom: 0.5em;\n}\n\n:host h1,\n:host h2 {\n	font-weight: 400;\n}\n\n:host h3,\n:host h4,\n:host h5,\n:host h6 {\n	font-weight: 500;\n}\n\n:host h1 {\n	font-size: 6rem;\n}\n:host h2 {\n	font-size: 3.75rem;\n}\n:host h3 {\n	font-size: 3rem;\n}\n:host h4 {\n	font-size: 2.125rem;\n}\n:host h5 {\n	font-size: 1.5rem;\n}\n:host h6 {\n	font-size: 1.25rem;\n}"; }
}

export { XYZTypographyHeadline as XyzTypographyHeadline };
