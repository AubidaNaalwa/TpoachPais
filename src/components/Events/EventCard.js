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
import UpdateEvents from './UpdateEvents';
import Button from '@material-ui/core/Button';
import { isAdmin } from '../../Constants';

const useStyles = makeStyles({
    root: {
        maxWidth: 259,
        width: 259,
        height: 350
    },
    media: {
        height: 180,
        width: '100%'
    },
    relative: {
        position: 'relative'
    }
});

export default function EventCard(props) {
    const classes = useStyles(),
    eInfo = props.event,
    setEvent = props.setEvent,
    [open, setOpen] = useState(false);

    const handleRemove = (id) => {
        props.handleRemove(id);
    }

    return (
        <div className={classes.relative}>
            {
                isAdmin &&
                <div className='btns_admin'>
                    <Button className="btn_delete" title="حذف" onClick={() => handleRemove(eInfo._id)}><DeleteOutlineRoundedIcon className="delete_icon" /></Button>
                    <Button className="btn_update" title="تعديل" onClick={() => setOpen(true)}><EditRoundedIcon className="update_icon" /></Button>
                </div>
            }
            <Link to={window.location.pathname === '/tpais/events' ? '/tpais/events/eventinfo' : '/space/events/eventinfo'}>
                <Card className={classes.root} onClick={() => setEvent(eInfo)}>
                    <CardActionArea>
                        <CardMedia>
                            <img alt="img" className={classes.media} src={eInfo.img} onError={(e) => e.target.src ='./images/default_event.jpg'} />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {eInfo.name}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                <Moment format="YYYY/MM/DD">{eInfo.date}</Moment>
                            </Typography>
                            <Typography variant="body2" component="p">
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