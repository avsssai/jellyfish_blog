const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["var(--font-merriweather)", ...fontFamily.sans],
				sans: "'Inter', sans-serif",
				mono: "'IBM Plex Mono', monospace",
			},
			backgroundColor: {
				bgYellow: "#EBEAE0",
				yellowPastel: "#FFD166",
				redPastel: "#EF476F",
				greenPastel: "#06D6A0",
				bluePastel: "#118AB2",
			},
			minWidth: {
				mobileWidth: `min(100%, 300px)`,
			},
			minHeight: {
				mobileHeight: `min(100%,300px)`,
			},
			borderColor: {
				bgYellow: "#EBEAE0",
				yellowPastel: "#FFD166",
				redPastel: "#EF476F",
				greenPastel: "#06D6A0",
				bluePastel: "#118AB2",
			},
			colors: {
				bgYellow: "#EBEAE0",
				yellowPastel: "#FFD166",
				redPastel: "#EF476F",
				greenPastel: "#06D6A0",
				bluePastel: "#118AB2",
			},
		},
	},
	plugins: [],
};
