import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF5400',
          warm: '#FF8C00',
          deep: '#C24000',
        },
        charcoal: '#283036',
        navy: '#343F5A',
        ink: '#0F131B',
        soft: '#161B25',
        offwhite: '#F7F8FA',
        muted: '#A4ABB8',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['"Red Hat Display"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.2vw, 6.5rem)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.875rem, 3.6vw, 3.25rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'grid-texture':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      clipPath: {
        angular: 'polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-reverse': {
          from: { transform: 'translate3d(-50%, 0, 0)' },
          to: { transform: 'translate3d(0, 0, 0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(6%, -4%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-4%, 5%, 0) scale(0.96)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(-8%, 6%, 0) scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(6deg)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 30s) linear infinite',
        drift: 'drift 24s ease-in-out infinite',
        'drift-slow': 'drift-slow 34s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
