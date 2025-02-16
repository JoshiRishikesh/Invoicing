module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Include pages folder
    "./components/**/*.{js,ts,jsx,tsx}" // Include components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'business': ['Roboto', 'sans-serif'],
      },   
    },
  },
  plugins: [],
};
