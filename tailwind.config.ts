/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainLight: '#C29870',
        darkGreen: '#143D3D',
        darkGray: '#2F2F2F',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        footer: '1fr, 1fr, 1fr',
        CtaBox: '1fr, 2fr',
      },
    },
  },
  plugins: [],
};
