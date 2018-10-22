import _Card from '@material-ui/core/Card'
import _Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import _CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Router from 'next/router'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { typography, themeColor, capitalize } from '../../style/helpers'
const Card = styled(_Card)`
`

const CardMedia = styled(_CardMedia)`
    height: 300px;
`

const Grid = styled(_Grid)`
    max-width: 300px !important;
`

const PrintCard = ({ picture, title, onClick, label }) => (
    <Grid item md={ 4 } sm={ 6 } xs={ 12 }>
        <Card >
            <CardActionArea onClick={ () => setTimeout(onClick(), 100) }>
                <CardMedia
                    image={ picture }
                    title={ capitalize(title) }
                />
                <CardContent>
                    <Typography gutterBottom variant='h2' component='h2'>
                        {capitalize(title)}
                    </Typography>
                    <If condition={ label }>
                        <Typography gutterBottom variant='h4' component='h4'>
                        </Typography>
                    </If>

                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
)

export default PrintCard
