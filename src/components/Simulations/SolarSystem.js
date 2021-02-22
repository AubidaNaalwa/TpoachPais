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
            <iframe title="SolarSystem" src="./Simulations/SolarSystem.html" frameBorder="0" className={classes.root} />
            <iframe title="Earth" src="https://react-planetary-earth-example.netlify.app" frameBorder="0" className={classes.root} />
            <iframe title="BalancingChemicalEquation" scrolling="no" src="https://iwant2study.org/lookangejss/00workshop/2019twa/ejss_model_BalancingChemEqns21_ionic/BalancingChemEqns21_ionic_Simulation.xhtml" frameBorder="0" className={classes.root} />
        </div>
    );
};