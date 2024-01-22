// craco.config.js
module.exports = {
    base: '/ladonagatona/',
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }