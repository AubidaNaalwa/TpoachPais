import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    horizontalCenter: {
        textAlign: 'center'
    },
    allCenter: {
        margin: '25% auto',
        textAlign: 'center'
    }
}));

export default function LoadingSpinner(props) {
    const classes = useStyles();

    return (
        <div className={props.disableVerticalCenter ? classes.horizontalCenter : classes.allCenter}>
            <CircularProgress color="secondary"/>
        </div>
    );
}