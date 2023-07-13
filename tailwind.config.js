import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      colors: {
        white: '#EBEBF0',
        black: '#13131A',
      },
      fontFamily: {
        sans: ['General Sans', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '450px',
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const glowUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
          glowUtilities[`.glow-${color}`] = {
            filter: `drop-shadow(0 0 1px ${color1}) drop-shadow(0 0 4px ${color2})`,
          };
        }
      }
      addUtilities(neonUtilities);
      addUtilities(glowUtilities);
    }),
  ],
};
