import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        textAlign: 'center'
    },
    btn: {
        fontSize: '130%',
        fontWeight: 'bold',
        width: '22.6%',
        margin: 3,
        minHeight: '73.6px',
        letterSpacing: 1,
        maxWidth: 250
    }
}));

export default function TPaisMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to="/tpais/events">
                <Button variant="contained" color="primary" className={classes.btn}>أحداث وأخبار</Button>
            </Link>
            <Link to="/tpais/courses">
                <Button variant="contained" color="primary" className={classes.btn}>نشاطات المركز</Button>
            </Link>
            <Link to="/tpais/experiments">
                <Button variant="contained" color="primary" className={classes.btn}>تجارب علمية</Button>
            </Link>
            <Link to="/tpais/gallery">
                <Button variant="contained" color="primary" className={classes.btn}>معرض الصور</Button>
            </Link>
        </div>
    )
}