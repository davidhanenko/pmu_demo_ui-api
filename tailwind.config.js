/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        purple1: '#420261',
        purple2: '#24043e',
        purple3: '#2b2266',
        teal1: '#41dce6',
        

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
      },

      backgroundImage: {
        'about-section': "url('../assets/images/ny_1.jpg')",

        'about-section_2':
          "url('../assets/images/bg_3.png')",

        'red-lips_1':
          "url('../assets/images/red_lips.png')",

        'contact-bg':
          "url('../assets/images/pink_bg_1.png')",

        'brows-section':
          "url('../assets/images/brows_bg_brown_1.png')",
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: 0 },
        },

        moveBg: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '400% 0' },
        },

        animateMouse: {
          from: {
            opacity: '1',
            transform: 'translateY(0)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(6px)',
          },
        },
      },

      gridTemplateColumns: {
        'fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'fill-275': 'repeat(auto-fill, minmax(275px, 1fr))',
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',

        moveBg: 'moveBg 12s linear infinite',
        animatedMouse: 'animateMouse 1.2s ease infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
