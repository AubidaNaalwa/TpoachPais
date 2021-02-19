import React, { useEffect } from 'react';
import ExperimentCard from './ExperimentCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing(2)
    },
    container: {
        textAlign: 'center',
        marginTop: '5%'
    }
}));

export default function Experiments(props) {
    const [experiments, setExperiments] = React.useState([]),
    classes = useStyles(),
    func = props.setExperiment;

    // const handleChange = (event) => {
    //     setSpacing(Number(event.target.value));
    // };

    async function fetchExperiments() {
        const res = await axios.get("/experiments");
        setExperiments(res.data.experiments);
    }

    useEffect(() => { fetchExperiments() }, []);

    return (
        <div className="content">
            <div className={classes.container}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            {experiments.map((value) => (
                                <Grid key={value._id} item>
                                    <ExperimentCard className='card' setExperiment={func} experiment={value} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}