/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  animation: {
			buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
		  },
		  keyframes: {
			buttonheartbeat: {
			  '0%': {
				'box-shadow': '0 0 0 0 #a77457', // Couleur initiale
				transform: 'scale(1)',
			  },
			  '50%': {
				'box-shadow': '0 0 0 7px rgba(167, 116, 87, 0)', // Transparent
				transform: 'scale(1.05)',
			  },
			  '100%': {
				'box-shadow': '0 0 0 0 rgba(167, 116, 87, 0)', // Transparent
				transform: 'scale(1)',
			  },
			},
		  },
		  
		  
		},
	  },
	plugins: [],
}

