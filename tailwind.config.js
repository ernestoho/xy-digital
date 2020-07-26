/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const { colors } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js'],
    theme: {
        corePlugins: {
            container: false,
        },
        screens: {
            '2xl': { max: '1440px' },
            xl: { max: '1280px' },
            lg: { max: '1024px' },
            md: { max: '768px' },
            sm: { max: '640px' },
            xs: { max: '440px' },
            '2xs': { max: '384px' },
        },
        fontFamily: {
            primary:
                'Oswald, -apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            secondary: 'Domine, Georgia, Cambria, "Times New Roman", Times, serif',
            tertiary:
                'Open Sans, -apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        opacity: {
            '0': '0',
            '10': '.1',
            '20': '.2',
            '25': '.25',
            '30': '.3',
            '40': '.4',
            '50': '.5',
            '60': '.6',
            '70': '.7',
            '75': '.75',
            '80': '.8',
            '90': '.9',
            '95': '.95',
            '100': '1',
        },
        borderRadius: {
            0: '0',
            sm: '0.125rem',
            default: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.25rem',
            full: '9999px',
            '50%': '50%',
        },
        colors: {
            black: colors.black,
            white: colors.white,
            grey: {
                '100': '#f5f5f5',
                '200': '#eeeeee',
                '300': '#e0e0e0',
                '400': '#bdbdbd',
                '500': '#9e9e9e',
                '600': '#757575',
                '700': '#616161',
                '800': '#424242',
                '900': '#212121',
            },
            'grey-cool': colors.gray,
            teal: colors.teal,
            green: colors.green,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.purple,
            yellow: colors.yellow,
            orange: colors.orange,
            red: colors.red,
            pink: colors.pink,
            link: '#3182ce',
            'link-dark': '#2c5282',
            navy: '#090916',
        },
        typography: theme => ({
            default: {
                css: {
                    color: theme('colors.[grey-cool].900'),
                    p: {
                        color: theme('colors[grey-cool].800'),
                        fontFamily: theme('fontFamily.secondary'),
                    },
                    a: {
                        color: theme('colors.link'),
                        textDecoration: 'none',
                        '&:hover': {
                            color: theme('colors[link-dark]'),
                            textDecoration: 'underline',
                        },
                    },
                },
            },
        }),
        extend: {
            spacing: {
                28: '7rem',
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '2px': '2px',
                '3px': '3px',
                '4px': '4px',
                '5px': '5px',
                '6px': '6px',
                '7px': '7px',
                '8px': '8px',
                '9px': '9px',
                '10px': '10px',
                '11px': '11px',
                '12px': '12px',
                '13px': '13px',
                '14px': '14px',
                '15px': '15px',
                '220px': '220px',
                '390px': '390px',
            },
            fontSize: {
                '2xs': '.65rem',
                xs: '.75rem',
                sm: '.875rem',
                md: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.75rem',
                '4xl': '2rem',
                '5xl': '2.25rem',
                '6xl': '2.75rem',
                '7xl': '3.25rem',
                title: '6rem',
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
            maxWidth: {
                '1500px': '1500px',
                '1070px': '1070px',
                '1340px': '1340px',
            },
            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
                'min-content': 'min-content',
                'max-content': 'max-content',
                '10px': '10px',
                '1500px': '1500px',
            },
            height: {
                '510px': '510px',
                '800px': '800px',
                '900px': '900px',
            },
            minHeight: theme => theme('height'),
            minWidth: theme => theme('width'),
            backgroundSize: {
                'auto-100%': 'auto 100%',
            },
            inset: {
                '10px': '10px',
                '20px': '20px',
                '30px': '30px',
                '40px': '40px',
                '50px': '50px',
                '60px': '60px',
                '70px': '70px',
                '80px': '80px',
                '90px': '90px',
                '100px': '100px',
                '1/4': '25%',
                '1/3': '33%',
                '1/2': '50%',
                '2/3': '66%',
                '3/4': '75%',
            },
            transitionDuration: {
                '0': '0ms',
                '2000': '2000ms',
                '3000': '3000ms',
                '4000': '4000ms',
                '5000': '5000ms',
                '6000': '6000ms',
                '7000': '7000ms',
                '8000': '8000ms',
            },
        },
    },
    // Enable to allow all variants for each utility class
    // Make sure file sizes are controlled first https://tailwindcss.com/docs/controlling-file-size/
    // variants: [
    //     'responsive',
    //     'group-hover',
    //     'group-focus',
    //     'focus-within',
    //     'first',
    //     'last',
    //     'odd',
    //     'even',
    //     'hover',
    //     'focus',
    //     'active',
    //     'visited',
    //     'disabled',
    //     'important',
    // ],
    variants: {
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        borderColor: ['responsive', 'hover', 'focus'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        scale: ['responsive', 'hover', 'focus', 'group-hover'],
        fontSize: ['responsive', 'important'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [
        require('@tailwindcss/typography'),
        // Add the important variant. Prefix classes with ! and add to variants to use
        plugin(function ({ addVariant }) {
            addVariant('important', ({ container }) => {
                container.walkRules(rule => {
                    rule.selector = `.\\!${rule.selector.slice(1)}`;
                    rule.walkDecls(decl => {
                        decl.important = true;
                    });
                });
            });
        }),
        'tailwindcss',
        'postcss-preset-env',
    ],
};
