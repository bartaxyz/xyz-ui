import { Component, Prop } from "@stencil/core";

@Component({
	tag: "xyz-typography-headline",
	styleUrl: "headline.css",
	shadow: true
})
export class XYZTypographyHeadline {
	@Prop()
	level: number;

	render() {
		if (this.level === 1) {
			return (
				<h1>
					<slot />
				</h1>
			);
		} else if (this.level === 2) {
			return (
				<h2>
					<slot />
				</h2>
			);
		} else if (this.level === 3) {
			return (
				<h3>
					<slot />
				</h3>
			);
		} else if (this.level === 4) {
			return (
				<h4>
					<slot />
				</h4>
			);
		} else if (this.level === 5) {
			return (
				<h5>
					<slot />
				</h5>
			);
		} else if (this.level === 6) {
			return (
				<h6>
					<slot />
				</h6>
			);
		} else {
			throw new Error('Attribute "level" needs to be a number from 1 to 6');
		}
	}
}
