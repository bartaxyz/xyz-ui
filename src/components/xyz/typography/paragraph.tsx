import { Component } from "@stencil/core";

@Component({
	tag: "xyz-typography-paragraph",
	styleUrl: "style.css",
	shadow: false
})
export class XYZTypographyParagraph {
	render() {
		return (
			<p>
				<slot />
			</p>
		);
	}
}
