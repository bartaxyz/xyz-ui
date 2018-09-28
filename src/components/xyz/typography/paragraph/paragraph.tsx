import { Component } from "@stencil/core";

@Component({
	tag: "xyz-typography-paragraph",
	styleUrl: "paragraph.css",
	shadow: true
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
