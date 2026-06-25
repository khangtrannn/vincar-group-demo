const tailwindcssAnimate = require('tailwindcss-animate')

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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        elevation: 'var(--elevation-default)',
        dark: 'var(--dark-default)',
        white: 'var(--white-default)',

        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
          950: 'var(--neutral-950)',
        },
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
        blue: {
          50: 'var(--blue-50)',
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)',
          500: 'var(--blue-500)',
          600: 'var(--blue-600)',
          700: 'var(--blue-700)',
          800: 'var(--blue-800)',
          900: 'var(--blue-900)',
        },
        green: {
          50: 'var(--green-50)',
          100: 'var(--green-100)',
          200: 'var(--green-200)',
          300: 'var(--green-300)',
          400: 'var(--green-400)',
          500: 'var(--green-500)',
          600: 'var(--green-600)',
          700: 'var(--green-700)',
          800: 'var(--green-800)',
          900: 'var(--green-900)',
        },
        red: {
          50: 'var(--red-50)',
          100: 'var(--red-100)',
          200: 'var(--red-200)',
          300: 'var(--red-300)',
          400: 'var(--red-400)',
          500: 'var(--red-500)',
          600: 'var(--red-600)',
          700: 'var(--red-700)',
          800: 'var(--red-800)',
          900: 'var(--red-900)',
        },
        yellow: {
          50: 'var(--yellow-50)',
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          400: 'var(--yellow-400)',
          500: 'var(--yellow-500)',
          600: 'var(--yellow-600)',
          700: 'var(--yellow-700)',
          800: 'var(--yellow-800)',
          900: 'var(--yellow-900)',
        },

        'disabled-primary-bg': 'var(--disabled-primary-bg)',
        'disabled-secondary-bg': 'var(--disabled-secondary-bg)',
        'disabled-secondary-text': 'var(--disabled-secondary-text)',
        'content-light-disabled': 'var(--content-light-disabled)',

        'vc-text-primary': 'var(--vc-text-primary)',
        'vc-text-secondary': 'var(--vc-text-secondary)',
        'vc-text-tertiary': 'var(--vc-text-tertiary)',
        'vc-text-other': 'var(--vc-text-other)',

        'vc-bg': 'var(--vc-bg)',
        'vc-bg-on': 'var(--vc-bg-on)',
        'vc-bg-primary': 'var(--vc-bg-primary)',
        'vc-bg-active': 'var(--vc-bg-active)',

        'vc-bg-input-default': 'var(--vc-bg-input-default)',
        'vc-bg-input-disabled': 'var(--vc-bg-input-disabled)',
        'vc-bg-input-focus': 'var(--vc-bg-input-focus)',
        'vc-bg-input-hover': 'var(--vc-bg-input-hover)',

        'vc-stroke-input-default': 'var(--vc-stroke-input-default)',
        'vc-stroke-input-hover': 'var(--vc-stroke-input-hover)',
        'vc-stroke-input-focus': 'var(--vc-stroke-input-focus)',
        'vc-stroke-input-error': 'var(--vc-stroke-input-error)',

        'vc-input-text-empty': 'var(--vc-input-text-empty)',
        'vc-input-text-disabled': 'var(--vc-input-text-disabled)',
        'vc-input-text-filled': 'var(--vc-input-text-filled)',

        'vc-info-on': 'var(--vc-info-on)',
        'vc-info-bg': 'var(--vc-info-bg)',
        'vc-warning-on': 'var(--vc-warning-on)',
        'vc-warning-bg': 'var(--vc-warning-bg)',
        'vc-error-on': 'var(--vc-error-on)',
        'vc-error-bg': 'var(--vc-error-bg)',
        'vc-success-on': 'var(--vc-success-on)',
        'vc-success-bg': 'var(--vc-success-bg)',

        'vc-btn-primary-text': 'var(--vc-btn-primary-text)',
        'vc-btn-primary-color-default':
          'var(--vc-btn-primary-color-default)',
        'vc-btn-primary-color-hover': 'var(--vc-btn-primary-color-hover)',
        'vc-btn-primary-color-active': 'var(--vc-btn-primary-color-active)',
        'vc-btn-primary-gray-default':
          'var(--vc-btn-primary-gray-default)',
        'vc-btn-primary-gray-hover': 'var(--vc-btn-primary-gray-hover)',
        'vc-btn-primary-gray-active': 'var(--vc-btn-primary-gray-active)',

        'vc-btn-secondary-bg-default':
          'var(--vc-btn-secondary-bg-default)',
        'vc-btn-secondary-color-stroke-default':
          'var(--vc-btn-secondary-color-stroke-default)',
        'vc-btn-secondary-color-stroke-hover':
          'var(--vc-btn-secondary-color-stroke-hover)',
        'vc-btn-secondary-color-stroke-active':
          'var(--vc-btn-secondary-color-stroke-active)',
        'vc-btn-secondary-color-hover':
          'var(--vc-btn-secondary-color-hover)',
        'vc-btn-secondary-color-text':
          'var(--vc-btn-secondary-color-text)',
        'vc-btn-secondary-gray-stroke-default':
          'var(--vc-btn-secondary-gray-stroke-default)',
        'vc-btn-secondary-gray-stroke-hover':
          'var(--vc-btn-secondary-gray-stroke-hover)',
        'vc-btn-secondary-gray-stroke-active':
          'var(--vc-btn-secondary-gray-stroke-active)',
        'vc-btn-secondary-gray-bg-hover':
          'var(--vc-btn-secondary-gray-bg-hover)',
        'vc-btn-secondary-gray-text':
          'var(--vc-btn-secondary-gray-text)',

        'vc-border': 'var(--vc-border)',
        'vc-border-highlight': 'var(--vc-border-highlight)',
        'vc-border-active': 'var(--vc-border-active)',
      },

      borderRadius: {
        rounded: '80px',
        xl: '24px',
      },

      fontWeight: {
        thin: '350',
        regular: '450',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      boxShadow: {
        sm: '0 2px 10px 1px rgba(0,0,0,0.08)',
        md: '0 2px 6px 0 rgba(51,65,85,0.05), 0 10px 25px 0 rgba(51,65,85,0.1)',
        base: '0 0 2px -1px rgba(51,65,85,0.1), 0 2px 16px 2px rgba(51,65,85,0.1)',
      },

      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'scroll-up': {
          to: {
            transform: 'translateY(calc(-50% - 0.5rem))',
          },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scroll-up':
          'scroll-up var(--animation-duration,40s) var(--animation-direction,forwards) linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}