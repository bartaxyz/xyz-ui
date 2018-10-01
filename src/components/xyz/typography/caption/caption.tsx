import { Component } from "@stencil/core";

@Component({
	tag: "xyz-typography-caption",
	styleUrl: "Caption.scss",
	shadow: true
})
export class XYZTypographyCaption {
	render() {
		return <slot />;
	}
}
