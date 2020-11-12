# Usage

```
npm install @funda/tailwind-config
```

If you want to extend the existing config:

```js
// tailwind.config.js

module.exports = {
  presets: [require("@funda/tailwind-config")],
  theme: {
    extend: {
      padding: {
        37: "2rem",
      },
    },
  },
};
```

If you want to use the config as is:

```js
// tailwind.config.js

module.exports = {
  presets: [require("@funda/tailwind-config")],
};
```

For more information on Tailwind check their [amazing documentation](https://tailwindcss.com/).
