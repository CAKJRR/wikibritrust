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
        sow: {
          DEFAULT: '#181b23',
          dark: '#0c0d12',
          card: '#13161e',
          border: '#222634',
          hover: '#1e222e',
        },
        redwood: {
          DEFAULT: '#991b1b',
          dark: '#7f1d1d',
          light: '#b91c1c',
        },
        terracotta: {
          DEFAULT: '#ce422b',
          light: '#e2533c',
          dark: '#b23520',
        },
        foliage: {
          DEFAULT: '#14532d',
          dark: '#052e16',
          light: '#166534',
        },
        rainfall: {
          DEFAULT: '#0284c7',
          dark: '#0369a1',
          light: '#38bdf8',
        },
        sprout: {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
          light: '#4ade80',
        },
        mist: {
          DEFAULT: '#94a3b8',
          dark: '#64748b',
          light: '#cbd5e1',
        },
        pebble: {
          DEFAULT: '#475569',
          dark: '#334155',
          light: '#64748b',
        },
        seedling: {
          DEFAULT: '#f8fafc',
          muted: '#cbd5e1',
          subtle: '#94a3b8',
        }
      },
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(0, 0, 0, 0.75)',
        'terracotta': '0 8px 25px -6px rgba(206, 66, 43, 0.45)',
        'sprout': '0 8px 25px -6px rgba(34, 197, 94, 0.35)',
      }
    },
  },
  plugins: [],
}
