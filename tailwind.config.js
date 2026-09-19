/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070a0f',
          900: '#0a0e14',
          800: '#11151c',
          700: '#171c26',
          600: '#222938',
        },
        terracotta: {
          50: '#fff5f2',
          100: '#ffe8e2',
          200: '#ffd4c9',
          300: '#ffb5a3',
          400: '#ff856b',
          500: '#f05335', // Main primary accent
          600: '#e04224',
          700: '#c53117',
          800: '#9e2916',
          900: '#7f2617',
        },
        surface: {
          card: '#11151c',
          hover: '#151b24',
          subtle: '#181f2a',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-hover': 'rgba(240, 83, 53, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'accent-glow': '0 0 25px -5px rgba(240, 83, 53, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
