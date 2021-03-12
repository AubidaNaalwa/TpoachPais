import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import 'moment/locale/ar';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import StickyIcon from '@material-ui/icons/StarsRounded';
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
    },
    pDesc: {
        boxSizing: 'border-box',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textAlign: 'justify',
        color: '#3a3b3c'
    },
    textHeight: {
        height: 134
    },
    createdAt: {
        fontWeight: 'bold',
        color: 'gray'
    },
    divAdmin: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        top: -1
    },
    btnUpdate: {
        cursor: 'pointer',
        position: 'absolute',
        float: 'right',
        right: -8,
        fontSize: '110%',
        backgroundColor: 'transparent',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.2s'
		}
    },
    btnDelete: {
        cursor: 'pointer',
        position: 'absolute',
        float: 'left',
        left: -8,
        fontSize: '110%',
        backgroundColor: 'transparent',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.2s'
		}
    },
    deleteIcon: {
        color: '#b30909',
        boxShadow: '2px 2px 4px #26221f',
        backgroundColor: '#f7f1db',
        borderRadius: 8,
        padding: 2
    },
    updateIcon: {
        color: '#16292f',
        boxShadow: '2px 2px 4px #26221f',
        backgroundColor: '#f7f1db',
        borderRadius: 8,
        padding: 2
    },
    divSticky: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        minWidth: 10,
        height: 32,
        fontSize: '180%',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
		},
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 8
    },
    stickyIcon: {
        color: '#f9dd44'
    }
});

export default function EventCard(props) {
    const classes = useStyles(),
    eInfo = props.event,
    setEvent = props.setEvent,
    [open, setOpen] = useState(false),
    isSpace = useLocation().pathname.includes('/space');

    const handleRemove = (id) => {
        props.handleRemove(id);
    }

    return (
        <div className={classes.relative}>
            {
                isAdmin &&
                <div className={classes.divAdmin}>
                    <Button className={classes.btnDelete} title="حذف" onClick={() => handleRemove(eInfo._id)}><DeleteOutlineRoundedIcon className={classes.deleteIcon} /></Button>
                    <Button className={classes.btnUpdate} title="تعديل" onClick={() => setOpen(true)}><EditRoundedIcon className={classes.updateIcon} /></Button>
                </div>
            }
            <Link to={isSpace ? `/space/events/${eInfo._id}` : `/tpais/events/${eInfo._id}`}>
                <Card className={classes.root} onClick={() => setEvent(eInfo)}>
                    <CardActionArea>
                        <CardMedia>
                            <img alt="img" className={classes.media} src={eInfo.img} onError={(e) => e.target.src ='./images/default_event.jpg'} />
                        </CardMedia>
                        <CardContent className={classes.textHeight}>
                            {eInfo.sticky && <div className={classes.divSticky} title="مُلتصق في الصفحة الرئيسية"><StickyIcon className={classes.stickyIcon} /></div>}
                            <Typography noWrap variant="h6" component="h2">
                                {eInfo.name}
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="p" className={classes.createdAt}>
                                <Moment format="LLL">{eInfo.createdAt}</Moment>
                            </Typography>
                            <Typography variant="body1" component="p" className={classes.pDesc}>
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