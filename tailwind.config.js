export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './App.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'classic-serif': ['"Playfair Display"', 'serif'],
        'classic-body': ['"Lora"', 'serif'],
      },
      colors: {
        classic: {
          gold: '#b08d57',
          dark: '#1a1410',
          cream: '#f9f5f0',
        },
      },
    },
  },
  plugins: [],
}