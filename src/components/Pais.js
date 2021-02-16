import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SnackBar from './SnackBar';
import PaisMenu from './PaisMenu';
import QuickGallery from './QuickGallery';

export default function Pais() {
    const [snack, setSnack] = useState({ message: "", severity: "" });

    //useEffect(() => { }, []);

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <PaisMenu />
            <QuickGallery />
            <SnackBar message={snack.message} severity={snack.severity} />
        </Grid>
    )
}