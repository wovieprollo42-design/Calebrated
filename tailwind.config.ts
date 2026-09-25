import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        container: '1140px',
      },
      boxShadow: {
        card: '0 12px 40px -12px rgba(52,63,90,0.18)',
        badge: '0 8px 24px -8px rgba(15,19,27,0.45)',
      },
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
        // Standardized type scale. Each clamp lands on the mobile value at 375px
        // and the desktop value at 1280px (see brand/type-scale notes in the repo report).
        hero: ['clamp(2.5rem, 1.982rem + 2.21vw, 3.75rem)', { lineHeight: '1.15' }],
        h2: ['clamp(2rem, 1.6892rem + 1.326vw, 2.75rem)', { lineHeight: '1.2' }],
        h3: ['clamp(1.5rem, 1.3964rem + 0.4421vw, 1.75rem)', { lineHeight: '1.25' }],
        h4: ['clamp(1.1875rem, 1.1098rem + 0.3315vw, 1.375rem)', { lineHeight: '1.25' }],
        body: ['clamp(1rem, 0.9741rem + 0.1105vw, 1.0625rem)', { lineHeight: '1.6' }],
        nav: ['clamp(0.9375rem, 1.0259rem - 0.1105vw, 1rem)', { lineHeight: '1.3' }],
        btn: ['clamp(0.9375rem, 1.0259rem - 0.1105vw, 1rem)', { lineHeight: '1' }],
        label: ['clamp(0.9375rem, 1.0259rem - 0.1105vw, 1rem)', { lineHeight: '1.4' }],
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
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 30s) linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
