import React from 'react'
import { getChallange } from '../../game/challanges'
import Button from '@material-ui/core/Button'
import game from '../../game'
const throws = {
    easy: 7,
    medium: 9,
    hard: 11,
}
export default class Challange extends React.Component {

    state = {
        currentChallange: null,
    }
    getChallange = () => {
        const c = window.challanges.getChallange()
        this.setState({ currentChallange: window.challanges.getChallange() })
    }
    render () {
        return (
            <div>
                <If condition={ this.state.currentChallange }>
                    <div>
                Difficulty:{this.state.currentChallange.difficulty}<br />
                Min Score:{throws[this.state.currentChallange.difficulty]}<br />
                tool:{this.state.currentChallange.tool}<br />
                expertise:{this.state.currentChallange.expertise}<br />
                    </div>
                </If>
                <Button onClick={ this.getChallange }>Get Challange</Button>
            </div>
        )
    }
}
