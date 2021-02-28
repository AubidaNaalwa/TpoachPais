import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100vh',
        height: '70vh'
    }
}));

export default function SolarSystem() {
    const classes = useStyles();

    return (
        <div className="content" style={{textAlign: 'center'}}>
            <iframe title="SolarSystem" src="./simulations/SolarSystem.html" frameBorder="0" className={classes.root} />
        </div>
    );
};