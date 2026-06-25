import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--dark-default)',
        'vc-bg': 'var(--vc-bg)',
        'vc-bg-on': 'var(--vc-bg-on)',
        'vc-bg-primary': 'var(--vc-bg-primary)',
        'vc-bg-active': 'var(--vc-bg-active)',
        'vc-border': 'var(--vc-border)',
        'vc-border-highlight': 'var(--vc-border-highlight)',
        'vc-text-primary': 'var(--vc-text-primary)',
        'vc-text-secondary': 'var(--vc-text-secondary)',
        'vc-text-tertiary': 'var(--vc-text-tertiary)',
        'vc-btn-primary-gray-default': 'var(--vc-btn-primary-gray-default)',
        'vc-stroke-input-focus': 'var(--vc-stroke-input-focus)',

        slate: {
          50: 'var(--slate-50)',
          100: 'var(--slate-100)',
          200: 'var(--slate-200)',
          300: 'var(--slate-300)',
          400: 'var(--slate-400)',
          500: 'var(--slate-500)',
          600: 'var(--slate-600)',
          700: 'var(--slate-700)',
          800: 'var(--slate-800)',
          900: 'var(--slate-900)',
          950: 'var(--slate-950)',
        },
        orange: {
          50: 'var(--orange-50)',
          100: 'var(--orange-100)',
          200: 'var(--orange-200)',
          300: 'var(--orange-300)',
          400: 'var(--orange-400)',
          500: 'var(--orange-500)',
          600: 'var(--orange-600)',
          700: 'var(--orange-700)',
          800: 'var(--orange-800)',
          900: 'var(--orange-900)',
        },
      },
      borderRadius: {
        rounded: '80px',
        xl: '24px',
      },
      boxShadow: {
        md: '0 2px 6px 0 rgba(51,65,85,0.05), 0 10px 25px 0 rgba(51,65,85,0.1)',
        sm: '0 2px 10px 1px rgba(0,0,0,0.08)',
        base: '0 0 2px -1px rgba(51,65,85,0.1), 0 2px 16px 2px rgba(51,65,85,0.1)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}