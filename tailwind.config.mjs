/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
        'nebuverse': "url('https://nebuverse.netlify.app/poster.webp')",
        'evergreen': "url('/evergreen.webp')",
			},
			fontFamily: {
				'onest' : ['Onest Variable', 'sans-serif']
			}
		}
		},
	plugins: [require('tailwindcss-animated')],
}
