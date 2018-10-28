import React from 'react'
import Grid from '@material-ui/core/Grid'
import PrintCard from '../../components/atoms/PrintCard'
import Title1 from '../../components/atoms/Title1'


const Make = () => (
    <React.Fragment>
        <Title1>Print</Title1>
        <Grid container justify='center' spacing={ 32 }>
            <PrintCard type='map' />
            <PrintCard type='character tokens' />
            <PrintCard type='equipment tokens' />
            <PrintCard type='challenge cards' />
            <PrintCard type='lotery tokens' />
        </Grid>
        <Title1>Cut</Title1>
        <ul>
            <li>4 character cards</li>
            <li>4 character tokens</li>
            <li>30 challange cards</li>
            <li>12 challange cards</li>
            <li>12 lotery tokens</li>

        </ul>

        <Title1>Few additional things</Title1>
        <ul>
            <li>2 regular 6 sided dice</li>
            <li>10 markers/stones for completed challanges (idea: colored vase filler beads)</li>
            <li>42 markers/stones for melted ice fragments</li>
            <li>Optionally glue the map on a piece of cardboard for better playing experience. Same for character tokens and character cards.</li>
            <li>Add your own creativity!</li>
        </ul>
    </React.Fragment>
)
export default Make
