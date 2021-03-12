import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
        textAlign: 'center',
        color: 'IndianRed'
	}
}));

export default function PageNotFound() {
    const classes = useStyles();

    return (
        <div className={classes.root}><h2>لم يتم العُثور على المُحتوى المطلوب</h2></div>
    );
}