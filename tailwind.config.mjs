/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        accent: '#06b6d4',
        'accent-dark': '#0e7490',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(6,182,212,.6)' },
          '50%': { boxShadow: '0 0 12px 6px rgba(6,182,212,.35)' },
        },
        bounceGentle: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        glow: 'glow 2.4s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
