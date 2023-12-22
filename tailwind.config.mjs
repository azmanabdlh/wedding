/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        "high-emphasis": ["Marck Script", ...defaultTheme.fontFamily.sans],
				"low-emphasis": ["SamsungOne", ...defaultTheme.fontFamily.sans],
				"darumadrop": ["Darumadrop One", ...defaultTheme.fontFamily.sans],
      }
		},
	},
	plugins: [],
}
