import Hidden from '@material-ui/core/Hidden'

const Break = ({ hidden, height, ...p }) =>
    hidden ?
        <Hidden { ...{ [hidden]: true } } implementation='js'><div { ...p } style={{ width: '100%', marginTop: height || '0px' }} /></Hidden> :
        <div { ...p } style={{ width: '100%', marginTop: height || '0px' }} />


export default Break
