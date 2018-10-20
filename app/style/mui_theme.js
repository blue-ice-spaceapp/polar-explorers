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
        fontSize: '14px',
        body: {
            fontSize: '22px',
        },
        caption: {
            color: '#000',
        },
        mainTitle: {
            fontFamily: 'Fascinate Inline, sans-serif',
        },
        Headline: {
            fontFamily: 'Fascinate Inline, sans-serif',
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
            contrastText: '#000',
        },
        secondary: {
            light: '#e5ffff',
            main: '#b2ebf2',
            dark: '#81b9bf',
            contrastText: '#000',
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
