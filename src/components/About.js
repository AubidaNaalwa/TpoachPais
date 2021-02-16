import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SnackBar from './SnackBar';

export default function About() {
    const [snack, setSnack] = useState({ message: "", severity: "" });

    //useEffect(() => { }, []);

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <SnackBar message={snack.message} severity={snack.severity} />
        </Grid>
    )
}