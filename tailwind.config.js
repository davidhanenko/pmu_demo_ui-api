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
        'about-section': "url('../assets/images/bg_1.png')",
        'about-section_2':
          "url('../assets/images/bg_2tr.png')",
        'about-section_3':
          "url('../assets/images/bg_2.png')",
      },
    },
  },
};
