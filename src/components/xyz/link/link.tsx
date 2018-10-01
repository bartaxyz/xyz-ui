import { Component, Prop } from "@stencil/core";

@Component({
	tag: "xyz-link",
	styleUrl: "Link.scss",
	shadow: true
})
export class XYZLink {
	@Prop()
	download?: string;
	@Prop()
	hreflang?: string;
	@Prop()
	rel?: string;
	@Prop()
	target?: string;
	@Prop()
	href?: string;
	@Prop()
	to?: string;

	render() {
		return (
			<a
				href={this.to || this.href}
				download={this.download}
				hreflang={this.hreflang}
				rel={this.rel}
				target={this.target}
			>
				<slot />
			</a>
		);
	}
}
