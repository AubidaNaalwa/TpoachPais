import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const useStyles = makeStyles(() => ({
    root: {
		maxWidth: 259,
		width: 259,
		height: 350
    },
    media: {
        height: 190
    }
}));

export default function EventCard(props) {
    const classes = useStyles(),
    eInfo = props.event,
	setEvent = props.setEvent;

    return (
        <Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={eInfo.img} title="صورة الحدث" />
				<CardContent>
                    <Typography variant="h6" component="h2">
						{eInfo.name}
					</Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        <Moment format="YYYY/MM/DD">{eInfo.date}</Moment>
					</Typography>
					<Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {eInfo.shortDescription}
					</Typography>
				</CardContent>
			</CardActionArea>
            <CardActions>
				<Button onClick={() => setEvent(eInfo)} size="small" color="primary">
                    <Link to='/tpais/events/eventinfo'>اقرأ المزيد...</Link>
                </Button>
            </CardActions>
        </Card>
    );
}