/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aeonik Pro', 'system-ui', 'sans-serif'],
        mono: ['ABC Diatype Semi Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 