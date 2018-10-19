export default (...wrappers) => (ComposedComponent) => {
    return wrappers.reverse().reduce((composition, wrapper) => {
        return wrapper(composition)
    }, ComposedComponent)

}
