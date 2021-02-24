import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import UpdateEvents from './UpdateEvents'

const useStyles = makeStyles({
    root: {
        maxWidth: 259,
        width: 259,
        height: 350
    },
    media: {
        height: 180,
        width: '100%'
    }
});

export default function EventCard(props) {
    const isAdmin = true, // REMOVE IN FUTURE
    classes = useStyles(),
    eInfo = props.event,
    setEvent = props.setEvent,
    [err, setErr] = useState(0),
    [open, setOpen] = useState(false);

    const handleRemove = (id) => {
        props.handleRemove(id);
    }

    const handleEdit = () => {
        setOpen(true);
    }

    return (
        <div>
            {
                isAdmin && <div className='adminBtns'>
                <DeleteOutlineRoundedIcon onClick={() => handleRemove(eInfo._id)} />
                <EditRoundedIcon onClick={handleEdit} />
                </div>
            }
            <Link to={window.location.pathname === '/tpais/events' ? '/tpais/events/eventinfo' : '/space/events/eventinfo'}>
                <Card className={classes.root} onClick={() => setEvent(eInfo)}>
                    <CardActionArea>
                        <CardMedia>
                            <img alt="img" className={classes.media} src={!err ? eInfo.img : "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"} onError={() => setErr(1)} />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {eInfo.name}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                <Moment format="YYYY/MM/DD">{eInfo.date}</Moment>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {eInfo.shortDescription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            {open && <UpdateEvents eventInfo={eInfo} setOpen={setOpen} handleEdit={props.handleEdit} />}
        </div>
    );
}