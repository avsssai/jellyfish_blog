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
				messina: "'Messina Sans Book', sans-serif",
			},
			backgroundColor: {
				bgYellow: "#EBEAE0",
				yellowPastel: "#FFD166",
				redPastel: "#EF476F",
				greenPastel: "#06D6A0",
				bluePastel: "#118AB2",
				bgBeige: "#EDDBC7",
				bgRed: "#CF4343",
				bgYello: "#EAD66C",
				bgRedAccent: "#813333",
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
				bgRedAccent: "rgb(var(--color-bgRedAccent) / 56)",
			},
			colors: {
				bgYellow: "#EBEAE0",
				yellowPastel: "#FFD166",
				redPastel: "#EF476F",
				greenPastel: "#06D6A0",
				bluePastel: "#118AB2",
				bgBeige: "#EDDBC7",
				bgRed: "#CF4343",
				bgRedAccent: "rgb(var(--color-bgRedAccent) / 56)",
				bgYello: "EAD66C",
			},
			tracking: {
				superTight: "-0.10em",
			},
			leading: {
				superTight: "0.9",
			},
		},
	},
	plugins: [],
	safelist: ["bg-bgBeige", "bg-bgRed", "bg-bgYello", "bg-bgRedAccent"],
};
