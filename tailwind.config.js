module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        '3/20': '15%',
      },
      screen: {
        tall: '(min-height: 768px)',
      }
    },
  },
  plugins: [],
}