import React from 'react'

import Button from '@material-ui/core/Button'
import game from '../../game'
const throws = {
    easy: 5,
    medium: 7,
    hard: 9,
}
export default class Challange extends React.Component {

    state = {
        tileToFlood: null,
    }
    ft = () => {
        this.setState({ tileToFlood: window.map.floodTile() })
    }
    render () {
        return (
            <div>
                Flood tile:{this.state.tileToFlood}<br />

                <Button onClick={ this.ft }>Get Flooded TIle</Button>
            </div>
        )
    }
}
