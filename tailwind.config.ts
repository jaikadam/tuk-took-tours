import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(var(--color-primary-50) / <alpha-value>)',
          100: 'hsl(var(--color-primary-100) / <alpha-value>)',
          200: 'hsl(var(--color-primary-200) / <alpha-value>)',
          300: 'hsl(var(--color-primary-300) / <alpha-value>)',
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
          500: 'hsl(var(--color-primary-500) / <alpha-value>)',
          600: 'hsl(var(--color-primary-600) / <alpha-value>)',
          700: 'hsl(var(--color-primary-700) / <alpha-value>)',
          800: 'hsl(var(--color-primary-800) / <alpha-value>)',
          900: 'hsl(var(--color-primary-900) / <alpha-value>)',
        },
        secondary: {
          50: 'hsl(var(--color-secondary-50) / <alpha-value>)',
          100: 'hsl(var(--color-secondary-100) / <alpha-value>)',
          200: 'hsl(var(--color-secondary-200) / <alpha-value>)',
          300: 'hsl(var(--color-secondary-300) / <alpha-value>)',
          400: 'hsl(var(--color-secondary-400) / <alpha-value>)',
          500: 'hsl(var(--color-secondary-500) / <alpha-value>)',
          600: 'hsl(var(--color-secondary-600) / <alpha-value>)',
          700: 'hsl(var(--color-secondary-700) / <alpha-value>)',
          800: 'hsl(var(--color-secondary-800) / <alpha-value>)',
          900: 'hsl(var(--color-secondary-900) / <alpha-value>)',
        },
        accent: {
          50: 'hsl(var(--color-accent-50) / <alpha-value>)',
          100: 'hsl(var(--color-accent-100) / <alpha-value>)',
          200: 'hsl(var(--color-accent-200) / <alpha-value>)',
          300: 'hsl(var(--color-accent-300) / <alpha-value>)',
          400: 'hsl(var(--color-accent-400) / <alpha-value>)',
          500: 'hsl(var(--color-accent-500) / <alpha-value>)',
          600: 'hsl(var(--color-accent-600) / <alpha-value>)',
          700: 'hsl(var(--color-accent-700) / <alpha-value>)',
          800: 'hsl(var(--color-accent-800) / <alpha-value>)',
          900: 'hsl(var(--color-accent-900) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-right': 'slide-right 0.6s ease-out',
        'bounce-soft': 'bounce-soft 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
