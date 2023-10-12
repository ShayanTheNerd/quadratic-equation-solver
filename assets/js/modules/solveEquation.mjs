export default function solveEquation({ a, b, c }) {
	const delta = Math.pow(b, 2) - 4 * a * c;

	if (delta < 0) return 'no real value';
	if (delta === 0) return -b / (2 * a);
	if (delta > 0) {
		const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
		const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);

		return [x1, x2];
	}
}
