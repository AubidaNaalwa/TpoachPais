import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import Moment from 'react-moment';
import EventsPopover from './EventsPopover';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
		maxWidth: 259,
		width: 259,
		height: '100%'
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    }
}));

const EventCard = (props) => {
    const { name, date, img, shortDescription } = props.event,
    [open, setOpen] = useState(false),
    classes = useStyles();

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <Card className={classes.root}>
            <CardHeader title={name} subheader={<Moment format="YYYY/MM/DD"> {date} </Moment>} />
            <CardMedia className={classes.media} image={img} title="Event Image" />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={handleClick}>
                    <MoreHorizSharpIcon />
                </IconButton>
            </CardActions>
            { open && <EventsPopover event={props.event} setOpen={setOpen} />}
        </Card>
    );
};

export default EventCard;