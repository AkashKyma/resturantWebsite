import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          700: '#c2410c',
          900: '#7c2d12'
        },
        slate: {
          950: '#020617'
        }
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.08)'
      }
    },
  },
  plugins: [],
};

export default config;
