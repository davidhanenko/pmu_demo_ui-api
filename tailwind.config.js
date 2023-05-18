/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
    },
  },
};
