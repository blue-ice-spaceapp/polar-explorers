import _Card from '@material-ui/core/Card'
import _Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import _CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import Router from 'next/router'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { typography, themeColor, capitalize } from '../../style/helpers'
const Card = styled(_Card)`
`

const CardMedia = styled(_CardMedia)`
    height: 150px;
`

const Grid = styled(_Grid)`
    max-width: 300px !important;
`

const PrintCard = ({ type }) => (
    <Grid item md={ 4 } sm={ 6 } xs={ 12 }>
        <Card >
            <CardActionArea onClick={ () => setTimeout(window.open(`/static/gameAssets/${ type }Print.pdf`, '_new'), 100) }>
                <CardHeader title={
                    <Typography gutterBottom variant='h2' component='h2'>
                        {capitalize(type)}
                    </Typography> }
                />
                <CardMedia
                    image={ `/static/gameAssets/${ type }.png` }
                    title={ capitalize(type) }
                />

            </CardActionArea>
        </Card>
    </Grid>
)

export default PrintCard
