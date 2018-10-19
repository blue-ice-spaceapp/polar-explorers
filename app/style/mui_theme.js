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
        caption: {
            color: '#455A64',
        },
    },
    palette: {
        background: {
            default: '#fafafa',
        },
        primary: {
            light: '#7986cb',
            main: '#3f51b5',
            dark: '#303f9f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162',
            contrastText: '#ffffff',
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
