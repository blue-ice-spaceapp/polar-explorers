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

        <Title1>Additional things</Title1>
        <ul>
            <li>2 dice</li>
            <li>30 markers/stones for completed questes</li>
            <li>30 markers/stones for melted ice fragmetns</li>
        </ul>
    </React.Fragment>
)
export default Make
