import breakpoint from './breakpoint'

export default (property, multiplier = 1) => props => {
    const gutters = Object.keys(props.theme.layout.gutter).sort(
        (a, b) => props.theme.breakpoints.values[a] - props.theme.breakpoints.values[b]
    )

    let style = ''
    for ( const size of gutters) {
        style += `
            @media ${ breakpoint(size)(props) } {
                ${ property }: ${ props.theme.layout.gutter[size] * multiplier }px;
            }   
        `
    }

    return style

}

export const gutterSize = size => props => props.theme.layout.gutter[size]
