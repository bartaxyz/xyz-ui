import { Component, Prop, Method } from "@stencil/core";

@Component({
	tag: "xyz-text-field",
	styleUrl: "TextField.scss",
	shadow: true
})
export class XYZTextField {
	@Prop()
	label: string;
	@Prop()
	errorText: string;
	@Prop()
	helperText: string;
	@Prop()
	value: string;
	@Prop()
	required: boolean;
	@Prop()
	disabled: boolean;
	@Prop()
	placeholder: string;

	inputElement: HTMLInputElement;
	labelElement: HTMLElement;

	@Method()
	getInput(): HTMLInputElement {
		return this.inputElement;
	}

	@Method()
	getLabel(): HTMLElement {
		return this.labelElement;
	}

	render() {
		return (
			<label
				class={{
					TextField: true,
					"TextField--disabled": this.disabled
				}}
			>
				<xyz-typography-caption
					class="TextField__Label"
					ref={(labelElement: HTMLElement) =>
						(this.labelElement = labelElement)
					}
				>
					{this.label}
					{this.errorText ? (
						<span class="TextField__Label__ErrorMessage">
							&nbsp;&middot; {this.errorText}
						</span>
					) : null}
					{this.helperText && !this.errorText ? (
						<span class="TextField__Label__HelperMessage">
							&nbsp;&middot; {this.helperText}
						</span>
					) : null}
				</xyz-typography-caption>
				<input
					class="TextField__Input"
					disabled={this.disabled}
					value={this.value}
					placeholder={this.placeholder}
					ref={(inputElement: HTMLInputElement) =>
						(this.inputElement = inputElement)
					}
				/>
			</label>
		);
	}
}
