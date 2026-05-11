/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
colors: {
        cream: '#FAF8F4',
        rose: '#F5D9E2',
        sage: '#D6E4D4',
        lavender: '#E7E0F5',
        brown: '#3D3D3D',
        mauve: '#B89AA8',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Quicksand', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      fontSize: {
        'body': ['17px', { lineHeight: '1.7' }],
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Nunito', 'sans-serif'],
        'accent': ['Caveat', 'cursive']
      },
      borderRadius: {
        'xl': '24px'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(90, 77, 71, 0.08)',
        'soft-lg': '0 8px 32px rgba(90, 77, 71, 0.12)',
        'lift': '0 12px 40px rgba(90, 77, 71, 0.15)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' }
        }
      }
    }
  },
  plugins: []
}
