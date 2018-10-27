// A theme with custom primary and secondary color.
// It's optional.
const theme = {
    layout: {
        gutter: { // must be ordered higher to lower....
            sm: 20,
            xs: 5,
        },
    },
    typography: {
        // Use the system font over Roboto.
        fontFamily: 'Roboto, sans-serif',
        fontSize: '22px',
        body: {
            fontSize: '22px',
        },
        caption: {
            color: '#031c42',
        },
        mainTitle: {
            fontFamily: 'Paytone One, sans-serif',
        },
        h2: {
            fontSize: '22px',
        },
        Headline: {
            fontFamily: 'Paytone One, sans-serif',
        },
    },
    palette: {
        background: {
            default: '#fafafa',
        },
        primary: {
            light: '#b6ffff',
            main: '#81d4fa',
            dark: '#4ba3c7',
            contrastText: '#031c42',
        },
        secondary: {
            light: '#e5ffff',
            main: '#b2ebf2',
            dark: '#031c42',
            contrastText: '#031c42',
        },
    },
}
export default theme


export const global_style = () => ({
    '@global': {
        body: {
            'min-height': '100vh',
            'font-family': "'Roboto', sans-serif",
        },
    },
})
