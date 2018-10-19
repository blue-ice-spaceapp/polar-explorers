export default (property, type) => props => {
    if (type && props.theme.typography[type] && props.theme.typography[type][property]) {
        return props.theme.typography[type][property]
    } else if (props.theme.typography[property]) {
        return `${ property }: ${ props.theme.typography[property] }`
    }
    else {
        return ''
    }
}
