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
        width: '22.2vw',
        margin: 3,
        minHeight: '74px',
		maxHeight: '74px',
        letterSpacing: 1,
        maxWidth: 250,
        boxShadow: '0 3px 9px #283039',
        "&:focus":{
            backgroundColor: 'rgb(31, 39, 44)' //backgroundColor: '#08457e' for Secondary TODO
        },
        color: 'white'
    },
}));

export default function Menu() {
    const classes = useStyles(),
    isSpace = useLocation().pathname.includes('/space');

    return (
        <div className={classes.root}>
            <Link to={isSpace ? "/space/events" : "/tpais/events"}>
                <Button variant="contained" color="primary" className={classes.btn}>أحداث المركز</Button>
            </Link>
            <Link to={isSpace ? "/space/courses" : "/tpais/courses"}>
                <Button variant="contained" color="primary" className={classes.btn}>نشاطات ودورات</Button>
            </Link>
            <Link to={isSpace ? "/space/experiments" : "/tpais/experiments"}>
                <Button variant="contained" color="primary" className={classes.btn}>تجارب ومُحاكاة</Button>
            </Link>
            <Link to={isSpace ? "/space/gallery" : "/tpais/gallery"}>
                <Button variant="contained" color="primary" className={classes.btn}>معرض الصور</Button>
            </Link>
        </div>
    );
}