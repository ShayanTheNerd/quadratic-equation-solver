module.exports = {
	content: ['./index.html', './main.js'],
	theme: {
		extend: {
			screens: {
				support: { raw: '(hover: hover)' }, // check if hover is supported on the device
			},
		},
	},
};
