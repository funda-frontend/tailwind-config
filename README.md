

## Usage

```
npm install @funda/tailwind-config
```

If you want to extend the existing config:


```js
// tailwind.config.js

const extendConfig = require('@funda/tailwind-config').extendConfig

module.exports = extendConfig({
  theme: {
    extend: {
      padding: {
        33: '2rem'
      }
    }
  }
})
```
If you want to use the config as is:

```js
// tailwind.config.js

const config = require('@funda/tailwind-config').config

module.exports = config;
```

For more information on Tailwind check their [amazing documentation](https://tailwindcss.com/).
