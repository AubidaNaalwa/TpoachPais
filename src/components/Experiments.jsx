import React, { Component, useEffect } from 'react'
import ExperimentCard from './experimentCard'
import ExperimentInfo from './experimentInfo'
import '../styles/experiments.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Experiments(props) {
    const [spacing, setSpacing] = React.useState(2);
    const [experiments, setExperiments] = React.useState([])
    const classes = useStyles();
    const func = props.setExperiment

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    async function fetchExperiments() {
        const res = await axios.get("/experiments")
        console.log(res)
        setExperiments(res.data.experiments)
    }

    useEffect(() => {
        fetchExperiments()
    }, [])

    return (
        <div id='container'>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={10}>
                        {experiments.map((value) => (
                            <Grid key={value._id} item>
                                <ExperimentCard className='card' setExperiment={func} experiment={value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}