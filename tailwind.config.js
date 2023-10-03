/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'forest-green': '#0B6623',
        'orange': '#C99700',
        'dark-gray': '#555555',
        'light-gray': '#D3D3D3',
      },

      fontFamily: {
        'titles': 'Eczar, serif',
        'paragraphs': 'Raleway, sans-serif',
      },

      screens: {
        's': '300px',
        'sm': '430px',
        'md': '650px',
        'm': '895px',
        'l': '1030px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      fontSize: {
        's': '12px',
        'xs': '14px',
        'sx': '16px',
        'lm': '20px',
        'm': '24px',
        'l': '35px',
        'ml': '40px',
        'xl': '50px',
      },
    },
  },
  plugins: [],
}
