import { SplashEffect } from "./effect.js";
import { Linear } from "../interpolation.js";

export class GrowAndShrink extends SplashEffect {
	constructor(element, options) {
		super(element);

		options = options || {};

		this.min = options.min || 0;
		this.max = options.max || 1;

		this.interpolation = options.interpolation || new Linear();
	}

	in(value) {
		this.setTransform("scale",
			(this.max - this.min) * this.interpolation.in(value) + this.min
		);
	}

	out(value) {
		this.setTransform("scale",
			(this.max - this.min) * this.interpolation.out(value * -1 + 1) + this.min
		);
	}
}
