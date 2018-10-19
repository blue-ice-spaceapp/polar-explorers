import Router from 'next/router'
const Reddirect = props => {
    const { to, condition } = props
    if (typeof window !== 'undefined' && window.document && window.document.createElement) {
        if (to && condition) {
            Router.push(to)
        }
    }
    return null
}

export default Reddirect
