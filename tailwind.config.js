/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/*.tsx", "./src/components/*.tsx ", "./src/components/**/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				white: "#e2e8f0",
				primary: "#94A3B8",
				white2: "#ffffff",
				sec: "#2DD4BF",
			},
			fontFamily: {
				clash: ["'Clash Display' , sans-serif"],
				inter: ["'Inter', sans-serif"],
				"product-sans": ["'Product Sans' , sans-serif"],
			},
		},
	},
	plugins: [],
};
