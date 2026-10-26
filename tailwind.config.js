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
        theme: {
          bg: '#0B1018',
          secondary: '#111823',
          card: '#151D28',
          border: '#283342',
          primary: '#FF986B',
          soft: '#FFB58F',
          text: '#F5F7FA',
          muted: '#AAB6C6',
        },
        obsidian: {
          950: '#0B1018',
          900: '#0e141f',
          800: '#111823',
          700: '#151D28',
          600: '#283342',
        },
        terracotta: {
          50: '#fff5f0',
          100: '#ffe8e0',
          200: '#ffd0c0',
          300: '#FFB58F', // Soft peach-orange
          400: '#FF986B', // Primary soft orange
          500: '#FF986B', // Main primary accent
          600: '#f07d4f',
          700: '#d96435',
          800: '#a84720',
          900: '#7f3314',
        },
        surface: {
          card: '#151D28',
          hover: '#192331',
          subtle: '#111823',
          border: '#283342',
          'border-hover': 'rgba(255, 152, 107, 0.4)',
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
