/**
 * Generate clearfix style
 */

const clearfix = () => `
    &::after {
        content: "";
        display: table;
        clear: both;
    }
`

export default clearfix
