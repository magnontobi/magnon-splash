// More of these in a PR would be VERY welcome. (I bascially only implemented
// ones i needed)

export class Linear {
	constructor() {
		this.in = this.out = this.interpolate;
	}

	interpolate(value) {
		return value;
	}
}

export class Cosine {
	interpolate(value) {
		return((1 - Math.cos(value * Math.PI)) / 2);
	}

	in(value) {
		return this.interpolate(value);
	}

	out(value) {
		return this.interpolate(value * -1 + 1);
	}
}

// Kudos: https://github.com/mootools/mootools-core/blob/master/Source/Fx/Fx.Transitions.js#L93
export class Bounce {
	interpolate(value) {
		for (let a = 0, b = 1; 1; a += b, b /= 2){
			if (value >= (7 - 4 * a) / 11) {
				return b * b - Math.pow((11 - 6 * a - 11 * value) / 4, 2);
			}
		}
	}

	in(value) {
		return this.interpolate(value);
	}

	out(value) {
		return this.interpolate(value);
	}
}
