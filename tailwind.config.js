module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
		},
		animation: {
			'fade-in': 'fade-in 2s ',
		},
		fontFamily: {
			mochi: "'Mochiy Pop One', 'sans-serif'",
			popins: "'Poppins', 'sans-serif'",
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
	],
	variants: {
		scrollbar: ['rounded'],
	},
}
