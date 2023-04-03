/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				'gray-0': '#F9F9F9',
				'gray-1': '#F2F2F7',
				'gray-2': '#E5E5EA',
				'gray-3': '#C7C7CC',
				'gray-4': '#8E9E93',
				'gray-5': '#636366',
				'gray-6': '#3A3A3C',
				'gray-7': '#1C1C1E',
				primary: '#FF6C00',
				'orange-1': '#FFFCF1',
				'orange-2': '#FFF8E1',
				'orange-3': '#FFEBB2',
				'orange-4': '#FFDF81',
				'orange-5': '#FFD34D',
				'orange-6': '#FFBF00',
				'orange-7': '#FFB100',
				'orange-8': '#FF9E00',
				'orange-9': '#FF8D00',
				error: '#F04700',
				success: '#44927F',
			},
			fontSize: {
				'heading-1': ['4.8rem', { lineHeight: '5rem', fontWeight: 'bold', letterSpacing: '-0.1rem' }],
				'heading-2': ['3.2rem', { lineHeight: '3.4rem', fontWeight: 'bold', letterSpacing: '-0.1rem' }],
				'heading-3': ['2.4rem', { lineHeight: '2.6rem', fontWeight: 'bold', letterSpacing: '-0.06rem' }],
				'heading-4': ['1.8rem', { lineHeight: '2.0rem', fontWeight: 'bold', letterSpacing: '-0.04rem' }],
				'heading-5': ['1.8rem', { lineHeight: '2.0rem', fontWeight: 'bold', letterSpacing: '-0.04rem' }],
				'heading-6': ['1.6rem', { lineHeight: '1.8rem', fontWeight: 'bold', letterSpacing: '-0.04rem' }],
				'heading-multi-1': ['4.8rem', { lineHeight: '6.4rem', fontWeight: 'bold', letterSpacing: '-0.1rem' }],
				'heading-multi-2': ['3.2rem', { lineHeight: '4.4rem', fontWeight: 'bold', letterSpacing: '-0.1rem' }],
				'heading-multi-3': ['2.4rem', { lineHeight: '3.2rem', fontWeight: 'bold', letterSpacing: '-0.1rem' }],
				'heading-multi-4': ['1.8rem', { lineHeight: '2.6rem', fontWeight: 'bold', letterSpacing: '-0.1rem' }],
				'heading-multi-6': ['1.6rem', { lineHeight: '2.4rem', fontWeight: 'bold', letterSpacing: '-0.1rem' }],
				'body-1': ['1.7rem', { lineHeight: '1.9rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-2': ['1.6rem', { lineHeight: '1.8rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-3': ['1.5rem', { lineHeight: '1.7rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-4': ['1.4rem', { lineHeight: '1.6rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-5': ['1.3rem', { lineHeight: '1.5rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-multi-0': ['1.9rem', { lineHeight: '3.0rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-multi-1': ['1.7rem', { lineHeight: '2.6rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-multi-2': ['1.6rem', { lineHeight: '2.5rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-multi-3': ['1.5rem', { lineHeight: '2.4rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-multi-4': ['1.4rem', { lineHeight: '2.3rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'body-multi-5': ['1.3rem', { lineHeight: '1.7rem', fontWeight: 'normal', letterSpacing: '-0.04rem' }],
				'caption-s': ['1.1rem', { lineHeight: '1.3rem', fontWeight: 'medium', letterSpacing: '-0.1rem' }],
				'caption-m': ['1.1rem', { lineHeight: '1.3rem', fontWeight: 'medium', letterSpacing: '-0.04rem' }],
				'caption-l': ['1.2rem', { lineHeight: '1.4rem', fontWeight: 'medium', letterSpacing: '-0.04rem' }],
				'button-0': ['1.8rem', { lineHeight: '2.0rem', fontWeight: 'medium', letterSpacing: '-0.04rem' }],
				'button-1': ['1.6rem', { lineHeight: '1.8rem', fontWeight: 'medium', letterSpacing: '-0.04rem' }],
				'tab-1': ['1.5rem', { lineHeight: '1.7rem', fontWeight: 'semibold', letterSpacing: '-0.04rem' }],
				'tab-2': ['1.5rem', { lineHeight: '1.7rem', fontWeight: 'medium', letterSpacing: '-0.04rem' }],
				'tab-3': ['1.4rem', { lineHeight: '1.6rem', fontWeight: 'semibold', letterSpacing: '-0.04rem' }],
			},

			screens: {
				pc: '800px',
				mobile: { min: '1px', max: '799px' },
			},
		},
	},
	plugins: [],
};
