/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const merge = require('lodash/merge')

const config = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './**/*.vue',
    './**/*.cshtml',
    './**/*.html'
  ],
  prefix: 'ui-',
  theme: {
    colors: {
      'orange-1': '#de9000',
      'orange-2': '#f7a100',
      'orange-3': '#f8b73e',
      'orange-4': '#f8c463',
      'blue-0': '#00517f',
      'blue-1': '#006199',
      'blue-2': '#0071b3',
      'blue-3': '#2c81b3',
      'blue-4': '#478bb3',
      'blue-5': '#e6f2f7',
      'blue-6': '#60c5f8',
      'green-1': '#22ab34',
      'green-2': '#eaf7eb',
      'green-3': '#acc700',
      'yellow-1': '#f8ce00',
      'yellow-2': '#fdfae5',
      'red-1': '#f03c30',
      'red-2': '#fbebea',
      'dark-1': '#333',
      'dark-2': '#666',
      'dark-3': '#999',
      'light-1': '#ccc',
      'light-2': '#ededed',
      'light-3': '#f7f7f7',
      white: '#fff',
      black: '#000',
      brown: '#53241b'
    },
    extend: {
      fontFamily: {
        proxima: '"Proxima Nova", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
    }
  }
}

const extendConfig = function (userConfig) {
    return merge(config, userConfig)
}

module.exports = {
  config,
  extendConfig
}
