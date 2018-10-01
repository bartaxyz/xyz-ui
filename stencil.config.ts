import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
	plugins: [sass()],
	namespace: "mycomponent",
	globalStyle: "src/global/variables.css",
	outputTargets: [
		{
			type: "dist"
		},
		{
			type: "www",
			serviceWorker: null
		}
	]
};
