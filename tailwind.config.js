/** @type {import('tailwindcss').Config} */
   const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': value => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        }
      );
    }),
  ],
  theme: {
    extend: {
      colors: {
        purple1: '#420261',
        purple2: '#24043e',
        purple3: '#2b2266',
        teal1: '#41dce6',
      },
      backgroundImage: {
        'about-section': "url('../assets/images/ny_1.jpg')",

        'about-section_2':
          "url('../assets/images/bg_3.png')",

        'red-lips_1':
          "url('../assets/images/red_lips.png')",

        'pink_lips':
          "url('../assets/images/pink_lips.png')",

        'contact-bg':
          "url('../assets/images/pink_bg_1.png')",
      },
      gridTemplateColumns: {
        'fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },

      keyframes: {
        move_bg: {
          from: { 'background-position': '0 0' },
          to: { 'background-position': '400% 0' },
        },
      },
      animation: {
        move_bg: 'move_bg 12s linear infinite',
      },
    },
  },
};
