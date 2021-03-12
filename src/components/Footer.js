import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 3,
        wordSpacing: 2,
        color: '#2a3333'
	}
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>تبواح بايس ومركز فضاء الطيبة © جميع الحقوق محفوظة</div>
    );
}