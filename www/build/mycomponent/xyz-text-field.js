/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class XYZTextField {
    getInput() {
        return this.inputElement;
    }
    getLabel() {
        return this.labelElement;
    }
    render() {
        return (h("label", { class: {
                TextField: true,
                "TextField--disabled": this.disabled
            } },
            h("xyz-typography-caption", { class: "TextField__Label", ref: (labelElement) => (this.labelElement = labelElement) },
                this.label,
                this.errorText ? (h("span", { class: "TextField__Label__ErrorMessage" },
                    "\u00A0\u00B7 ",
                    this.errorText)) : null,
                this.helperText && !this.errorText ? (h("span", { class: "TextField__Label__HelperMessage" },
                    "\u00A0\u00B7 ",
                    this.helperText)) : null),
            h("input", { class: "TextField__Input", disabled: this.disabled, value: this.value, placeholder: this.placeholder, ref: (inputElement) => (this.inputElement = inputElement) })));
    }
    static get is() { return "xyz-text-field"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "errorText": {
            "type": String,
            "attr": "error-text"
        },
        "getInput": {
            "method": true
        },
        "getLabel": {
            "method": true
        },
        "helperText": {
            "type": String,
            "attr": "helper-text"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return ":host {\n  display: block; }\n\n.TextField {\n  display: block;\n  background: rgba(0, 0, 0, 0.025);\n  padding: 6px 8px 8px;\n  border-radius: 6px;\n  -webkit-box-shadow: inset 0 0 0 0 currentColor;\n  box-shadow: inset 0 0 0 0 currentColor;\n  -webkit-transition: 0.1s;\n  transition: 0.1s; }\n  .TextField:focus-within {\n    -webkit-box-shadow: inset 0 0 0 2px currentColor;\n    box-shadow: inset 0 0 0 2px currentColor; }\n\n.TextField--disabled {\n  background: transparent;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.025);\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.025); }\n\n.TextField__Label {\n  display: block; }\n\n.TextField__Label__ErrorMessage {\n  color: red; }\n\n.TextField__Input {\n  display: block;\n  border: none;\n  background: transparent;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 0.875rem; }\n  .TextField__Input:focus {\n    outline: none; }\n\n.TextField__Input::-webkit-input-placeholder {\n  color: currentColor;\n  opacity: 0.2; }\n\n.TextField__Input::-moz-placeholder {\n  color: currentColor;\n  opacity: 0.2; }\n\n.TextField__Input:-ms-input-placeholder {\n  color: currentColor;\n  opacity: 0.2; }\n\n.TextField__Input:-moz-placeholder {\n  color: currentColor;\n  opacity: 0.2; }\n\nslot {\n  text-decoration: inherit; }"; }
}

class XYZTypographyCaption {
    render() {
        return h("slot", null);
    }
    static get is() { return "xyz-typography-caption"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n  font-family: \"Source Sans Pro\", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased; }\n\n:host {\n  display: inline;\n  font-size: 0.75rem;\n  text-decoration: inherit;\n  line-height: 1rem; }\n  :host slot {\n    text-decoration: inherit; }"; }
}

export { XYZTextField as XyzTextField, XYZTypographyCaption as XyzTypographyCaption };
