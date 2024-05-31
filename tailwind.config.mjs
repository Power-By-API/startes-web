/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Kanit', 'sans-serif'],
			},
			colors: {
				"primary-color": "var(--primary-color)",
				"secondary-color": "var(--secondary-color)"
			}
		},
	},
	plugins: [],
}
