import React, { useEffect, useState } from 'react';
import ExperimentCard from './ExperimentCard';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

export default function Experiments(props) {

    const [experiments, setExperiments] = useState([]);
    const [currPath, setCurrPath] = useState('');

    const handleRemove = (id) => {
        try {
            axios.delete(`/experiments/${currPath}/delete/id=${id}`)
            const tempExperiments = [...experiments]
            const i = tempExperiments.findIndex(e => e._id === id)
            tempExperiments.splice(i, 1)
            setExperiments(tempExperiments)
        } catch (error) {
            console.log(error.toString())
        }
    }

    const handleEdit = (experiment) => {
        try {
            axios.put(`/experiments/${currPath}/update/id=${experiment._id}`, experiment)
            const tempExperiments = [...experiments]
            const i = tempExperiments.findIndex(e => e._id === experiment._id)
            tempExperiments[i] = experiment
            setExperiments(tempExperiments)
        } catch (error) {
            console.log(error.toString())
        }
    }

    useEffect(() => {
        async function fetchExperiments() {
            let experiments

            if (window.location.pathname === '/tpais/experiments') {
                experiments = await axios.get(`/experiments`);
                setCurrPath('tpoach')
            } else {
                experiments = await axios.get(`/space/experiments`);
                setCurrPath('space')
            }
            setExperiments(experiments.data.experiments);
        }
        fetchExperiments();
    }, []);

    return (
        <Grid container direction="row" justify="flex-start" spacing={10} style={{ marginTop: -10, marginRight: -1 }}>
            {
                experiments.map((e) => (
                    <Grid item key={e._id}>
                        <ExperimentCard setExperiment={props.setExperiment} handleRemove={handleRemove} handleEdit={handleEdit} experiment={e} />
                    </Grid>
                ))
            }
        </Grid>
    );
}