/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    purge: ['./**/*.vue', './**/*.cshtml', './**/*.html'],
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
            'red-3': '#dd1d10',
            'dark-1': '#333',
            'dark-2': '#666',
            'dark-3': '#999',
            'light-1': '#ccc',
            'light-2': '#ededed',
            'light-3': '#f7f7f7',
            white: '#fff',
            black: '#000',
            brown: '#53241b',
        },
        extend: {
            fontFamily: {
                proxima:
                    '"Proxima Nova", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
            height: {
                11: '2.75rem',
            },
            width: {
                11: '2.75rem',
            },
            keyframes: {
                'ui-fade-right': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(100%)',
                    },
                    '50%': {
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
            },
            animation: {
                'fade-right-enter-active': 'ui-fade-right 0.6s 1 ease-out',
                'fade-right-leave-active':
                    'ui-fade-right 0.6s 1 ease-out reverse',
            },
            inset: (theme, { negative }) => ({
                ...theme('spacing'),
                ...negative(theme('spacing')),
            }),
            maxHeight: (theme) => ({
                ...theme('spacing'),
                120: '30rem',
                '1/2': '50%',
                full: '100%',
                screen: '100vh',
            }),
            maxWidth: {
                '1/3': '33%',
                '2/3': '66%',
            },
            flex: {
                '1/3': '33%',
                '2/3': '66%',
            },
        },
      screens: {
        sm: "500px",
        md: "760px",
        lg: "1020px",
        xl: "1200px",
      },
    },
    variants: {
        opacity: ['group-hover'],
        extend: {
            outline: ['hover', 'active'],
            backgroundColor: ['disabled'],
        },
    },
};
