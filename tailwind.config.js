/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './assets/js/app.js', './assets/js/modules/*.mjs'],
	future: { hoverOnlyWhenSupported: true },
	theme: {
		extend: {
			fontSize: {
				'2.5xl': '27px',
				'1.5xl': '21px',
			},
		},
	},
};
