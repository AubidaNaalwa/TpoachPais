import React, { useEffect, useState } from 'react';
import ExperimentCard from './ExperimentCard';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

export default function Experiments(props) {
    const [experiments, setExperiments] = useState([]);

    
        
        useEffect(() => {
        async function fetchExperiments() {
        let experiments

            if (window.location.pathname === '/tpais/experiments') {
                experiments = await axios.get(`/experiments`);
            } else {
                experiments = await axios.get(`/space/experiments`);
            }
            setExperiments(experiments.data.experiments);
        }
        fetchExperiments();
    }, []);

    


    return (
        <Grid container direction="row" justify="space-between" spacing={3} style={{marginTop: 15}}>
        {
            experiments.map((e) => (
                <Grid item key={e._id}>
                    <ExperimentCard setExperiment={props.setExperiment} experiment={e} />
                </Grid>
            ))
        }
        </Grid>
    );
}