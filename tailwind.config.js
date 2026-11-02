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
          DEFAULT: '#392525',
          dark: '#211515',
          card: '#2c1d1d',
          border: '#453030',
          hover: '#3a2727',
        },
        redwood: {
          DEFAULT: '#683226',
          dark: '#52271d',
          light: '#7e3e30',
        },
        terracotta: {
          DEFAULT: '#B25D3E',
          light: '#c76e4f',
          dark: '#934a30',
        },
        foliage: {
          DEFAULT: '#3E4734',
          dark: '#2d3426',
          light: '#4e5a42',
        },
        rainfall: {
          DEFAULT: '#728383',
          dark: '#586666',
          light: '#8fa0a0',
        },
        sprout: {
          DEFAULT: '#E3E890',
          dark: '#b6bd64',
          light: '#f1f5b0',
        },
        mist: {
          DEFAULT: '#B6B7A5',
          dark: '#959685',
          light: '#d2d3c5',
        },
        pebble: {
          DEFAULT: '#7E7862',
          dark: '#615c4a',
          light: '#9e977d',
        },
        seedling: {
          DEFAULT: '#FAF5E9',
          muted: '#ded7c5',
          subtle: '#b8b09d',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(57, 37, 37, 0.5)',
        'terracotta': '0 8px 25px -6px rgba(178, 93, 62, 0.35)',
        'sprout': '0 8px 25px -6px rgba(227, 232, 144, 0.25)',
      }
    },
  },
  plugins: [],
}
