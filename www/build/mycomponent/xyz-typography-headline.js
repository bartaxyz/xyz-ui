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
    static get style() { return ":host {\n  display: block; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  line-height: 1em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em; }\n\nh1,\nh2 {\n  font-weight: 400; }\n\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500; }\n\nh1 {\n  font-size: 6rem; }\n\nh2 {\n  font-size: 3.75rem; }\n\nh3 {\n  font-size: 3rem; }\n\nh4 {\n  font-size: 2.125rem; }\n\nh5 {\n  font-size: 1.5rem; }\n\nh6 {\n  font-size: 1.25rem; }"; }
}

export { XYZTypographyHeadline as XyzTypographyHeadline };
