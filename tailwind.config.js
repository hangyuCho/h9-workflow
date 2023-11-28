// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './index.html', 
    './src/**/*.vue', 
    './src/**/*.ts',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.sky,
        "vtd-secondary": colors.gray
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography')
  ],
}
