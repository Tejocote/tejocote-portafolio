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
		},
    colors: {
        'primary-blue': '#0F172A',   // Fondo
        'secondary-blue': '#283e70', // Cards
        'text-main': '#F5EFE6',      // Títulos
        'text-muted': '#E8DFCA',    // Párrafos
      },
		},
	plugins: [require('tailwindcss-animated')],
}
}
