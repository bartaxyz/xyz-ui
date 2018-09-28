/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZTypographyHeadline {
    render() {
        console.log(this.element);
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
        "element": {
            "elementRef": true
        },
        "level": {
            "type": Number,
            "attr": "level"
        }
    }; }
    static get style() { return "\nxyz-typography-headline.sc-xyz-typography-headline, xyz-typography-paragraph.sc-xyz-typography-headline, xyz-typography-caption.sc-xyz-typography-headline {\n	font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif;\n	-webkit-font-smoothing: antialiased;\n}\n\nxyz-typography-headline.sc-xyz-typography-headline {\n	background: red;\n	display: block;\n}\n\n.sc-xyz-typography-headline-h   h1.sc-xyz-typography-headline, .sc-xyz-typography-headline-h   h2.sc-xyz-typography-headline, .sc-xyz-typography-headline-h   h3.sc-xyz-typography-headline, .sc-xyz-typography-headline-h   h4.sc-xyz-typography-headline, .sc-xyz-typography-headline-h   h5.sc-xyz-typography-headline, .sc-xyz-typography-headline-h   h6.sc-xyz-typography-headline {\n	line-height: 1em;\n	margin-top: 0.5em;\n	margin-bottom: 0.5em;\n}\n\nxyz-typography-headline.sc-xyz-typography-headline-h   h1.sc-xyz-typography-headline, xyz-typography-headline.sc-xyz-typography-headline-h   h2.sc-xyz-typography-headline {\n	font-weight: 400;\n}\n\nxyz-typography-headline.sc-xyz-typography-headline-h   h3.sc-xyz-typography-headline, xyz-typography-headline.sc-xyz-typography-headline-h   h4.sc-xyz-typography-headline, xyz-typography-headline.sc-xyz-typography-headline-h   h5.sc-xyz-typography-headline, xyz-typography-headline.sc-xyz-typography-headline-h   h6.sc-xyz-typography-headline {\n	font-weight: 500;\n}\n\nxyz-typography-headline.sc-xyz-typography-headline-h   h1.sc-xyz-typography-headline {\n	font-size: 6rem;\n}\nxyz-typography-headline.sc-xyz-typography-headline-h   h2.sc-xyz-typography-headline {\n	font-size: 3.75rem;\n}\nxyz-typography-headline.sc-xyz-typography-headline-h   h3.sc-xyz-typography-headline {\n	font-size: 3rem;\n}\nxyz-typography-headline.sc-xyz-typography-headline-h   h4.sc-xyz-typography-headline {\n	font-size: 2.125rem;\n}\nxyz-typography-headline.sc-xyz-typography-headline-h   h5.sc-xyz-typography-headline {\n	font-size: 1.5rem;\n}\nxyz-typography-headline.sc-xyz-typography-headline-h   h6.sc-xyz-typography-headline {\n	font-size: 1.25rem;\n}\n\nxyz-typography-paragraph.sc-xyz-typography-headline {\n	display: block;\n}\n\nxyz-typography-caption.sc-xyz-typography-headline {\n	display: inline;\n	font-size: 0.6875rem;\n}\n"; }
}

export { XYZTypographyHeadline as XyzTypographyHeadline };
