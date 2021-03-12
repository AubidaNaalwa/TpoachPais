import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackBar(props) {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === "clickaway")
            return;

        props.open('');
    };

    return (
        props.message !== undefined &&
        <div className={classes.root} dir="ltr">
            <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.severity}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
}