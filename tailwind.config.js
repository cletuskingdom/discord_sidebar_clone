const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: "#202225",
				secondary: "#5865f2",
				gray: colors.trueGray,
				gray: {
					900: "#202225",
					800: "#2f3136",
					700: "#36393f",
					600: "#4f545c",
					400: "#d4d7dc",
					300: "#e3e5e8",
					200: "#ebedef",
					100: "#f2f3f5",
				},
			},
		},
	},
	plugins: [],
};
