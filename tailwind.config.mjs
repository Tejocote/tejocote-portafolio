/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'satoshi': ['Satoshi', "Roboto"]
      },
		
			animation: {
        'infinite-scroll': 'infinite-scroll 8s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
		}
		},
	plugins: [require('tailwindcss-animated')],
}
}
