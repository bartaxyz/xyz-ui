import { Component, Prop } from "@stencil/core";

@Component({
	tag: "xyz-link",
	styleUrl: "link.css",
	shadow: true
})
export class XYZLink {
	@Prop()
	to: string;

	render() {
		return (
			<a href={this.to}>
				<slot />
			</a>
		);
	}
}
