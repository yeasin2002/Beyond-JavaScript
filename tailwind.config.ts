import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          js: { 'minion-yellow': '#F0DB4F', 'dark-charcoal': '#323330' },
          nuxt: { green: '#00DC82', gray: '#020420' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
