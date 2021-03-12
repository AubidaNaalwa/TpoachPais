import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
    btn: {
        fontSize: '130%',
        fontWeight: 'bold',
        width: '21vw',
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 5,
        marginRight: 5,
        minHeight: '74px',
		maxHeight: '74px',
        letterSpacing: 1,
        maxWidth: 260,
        boxShadow: '0 1px 3px #283039',
        color: 'white'
    },
    btnClicked: {
        fontSize: '130%',
        fontWeight: 'bold',
        width: '21vw',
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 5,
        marginRight: 5,
        minHeight: '74px',
		maxHeight: '74px',
        letterSpacing: 1,
        maxWidth: 260,
        backgroundColor: 'rgb(45, 93, 145)',
        boxShadow: '0 2px 19px inset #283039',
        '&:hover': {
			backgroundColor: 'rgb(45, 93, 145)',
            boxShadow: '0 2px 10px inset #283039',
		},
        color: 'white'
    }
}));

export default function Menu() {
    const classes = useStyles(),
    location = useLocation().pathname,
    isSpace = location.includes('/space');

    return (
        <div className={classes.root}>
            <Link to={isSpace ? "/space/events" : "/tpais/events"}>
                <Button variant="contained" color="primary" className={location.includes('/events') ? classes.btnClicked : classes.btn}>أحداث المركز</Button>
            </Link>
            <Link to={isSpace ? "/space/courses" : "/tpais/courses"}>
                <Button variant="contained" color="primary" className={location.includes('/courses') ? classes.btnClicked : classes.btn}>نشاطات ودورات</Button>
            </Link>
            <Link to={isSpace ? "/space/experiments" : "/tpais/experiments"}>
                <Button variant="contained" color="primary" className={location.includes('/experiments') ? classes.btnClicked : classes.btn}>تجارب ومُحاكاة</Button>
            </Link>
            <Link to={isSpace ? "/space/gallery" : "/tpais/gallery"}>
                <Button variant="contained" color="primary" className={location.includes('/gallery') ? classes.btnClicked : classes.btn}>معرض الصور</Button>
            </Link>
        </div>
    );
}