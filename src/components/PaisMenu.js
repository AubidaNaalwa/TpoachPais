import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        textAlign: 'center'
    },
    btn: {
        fontSize: '110%',
        fontWeight: 'bold',
        width: '22.6%',
        margin: 3,
        minHeight: '73.6px',
        letterSpacing: 1,
        maxWidth: 250
    }
}));

export default function PaisMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" className={classes.btn}>
            أحداث وأخبار
            </Button>
            <Button variant="contained" color="primary" className={classes.btn}>
            نشاطات المركز
            </Button>
            <Button variant="contained" color="primary" className={classes.btn}>
            تجارب علمية
            </Button>
            <Button variant="contained" color="primary" className={classes.btn}>
            معرض الصور
            </Button>
        </div>
    )
}
