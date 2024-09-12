import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#FFF250', //yellow color
        secondary: '#002D54', // dark blue color
        lightBlue: '#EEF4FA', // light blue color
        textBlack: '#1A1A1A', // black text color
        textGrey: '#696969', //gray color
        textAsh: '#5C5C5C',
      },
      fontFamily: {
        sans: ['var(--font-instrument-sans)'],
        alt: ['Arial', 'sans-serif'],
        instrument: ['var(--font-instrument)'],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '700': '700',
      },
      boxShadow: {
        customBtn: '0px 1px 6px 0px #0000000D',
        graphShadow: '0px 1px 8px 0px #0000001A',
        graph2: '0px 1px 2px 0px #0000001A',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
