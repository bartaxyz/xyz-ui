import { Component } from "@stencil/core";

@Component({
	tag: "xyz-typography-caption",
	styleUrl: "style.css",
	shadow: false
})
export class XYZTypographyParagraph {
	render() {
		return <slot />;
	}
}
