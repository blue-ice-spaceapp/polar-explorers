import _Card from '@material-ui/core/Card'
import _Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import _CardMedia from '@material-ui/core/CardMedia'
import _CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'

import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { typography, themeColor, capitalize, breakpoint } from '../../style/helpers'
const Card = styled(_Card)`
`

const CardHeader = styled(_CardHeader)`
    padding-left: 15px !important;
    padding-right: 15px !important;
`

const CardMedia = styled(_CardMedia)`
    height: 150px;
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;
    
`
/* @media ${ breakpoint('md') } {
        height: 20vw !important;
    } */
const Grid = styled(_Grid)`
    max-width: 300px !important;
   
`
/* @media ${ breakpoint('md') } {
        max-width: 600px !important;
    } */
const PrintCard = ({ type }) => (
    <Grid item lg={ 4 } md={ 4 } sm={ 6 } xs={ 12 }>
        <Card >
            <CardActionArea onClick={ () => setTimeout(window.open(`/static/gameAssets/${ type }Print.pdf`, '_new'), 100) }>
                <CardHeader title={
                    <Typography gutterBottom variant='h2' component='h2'>
                        {capitalize(type)}
                    </Typography> }
                />
                <CardMedia
                    image={ `/static/gameAssets/${ type }.jpg` }
                    title={ capitalize(type) }
                />

            </CardActionArea>
        </Card>
    </Grid>
)

export default PrintCard
