import { Component } from "@stencil/core";

@Component({
	tag: "xyz-typography-caption",
	styleUrl: "caption.css",
	shadow: true
})
export class XYZTypographyCaption {
	render() {
		return <slot />;
	}
}
