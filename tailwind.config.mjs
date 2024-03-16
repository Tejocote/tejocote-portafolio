/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
        'nebuverse': "url('https://axeldevport.netlify.app/Project-1.webp')",
        'evergreen': "url('/evergreen.webp')",
			},
			fontFamily: {
				'onest' : ['Onest Variable', 'sans-serif']
			}
		}
		},
	plugins: [],
}
