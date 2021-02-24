import React, { useEffect, useState } from 'react';
import ExperimentCard from './ExperimentCard';
import Grid from '@material-ui/core/Grid';
import '../../styles/selector.css'
const axios = require('axios');

export default function Experiments(props) {
    const [experiments, setExperiments] = useState([]);
    const [flag, setFlag] = useState(0)
    const [select, setSelect] = useState("")

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    useEffect(() => {
        async function fetchExperiments() {
            let experiments

            if (window.location.pathname === '/tpais/experiments') {
                experiments = await axios.get(`/experiments`);
                setFlag(0)
            } else {
                experiments = await axios.get(`/space/experiments`);
                setFlag(1)
            }
            setExperiments(experiments.data.experiments);
        }
        fetchExperiments();
    }, []);




    return (
        <div>
            {flag && experiments.length ?
                <Grid container direction="row" justify="space-between" spacing={3} style={{ marginTop: 15 }}>
                    {experiments.map(e => <Grid item key={e._id}>
                        <ExperimentCard setExperiment={props.setExperiment} experiment={e} />
                    </Grid>)
                    }
                </Grid>
                : null}

            {experiments.length > 0 && !flag ?
                <div>

                    <div className="box">
                        <select name="two" className="dropdown-select" value={select} onChange={handleSelect}>
                            <option value="">الكل</option>
                            <option value="Ch">كيمياء</option>
                            <option value="Ph">فيزياء</option>
                            <option value="Bio">بيولوجيا</option>
                        </select>

                    </div>
                    <Grid container direction="row" justify="space-between" spacing={3} style={{ marginTop: 15 }}>
                        {select
                            ? experiments.filter(fd => fd.category === select).map(e => <Grid item key={e._id}>
                                <ExperimentCard setExperiment={props.setExperiment} experiment={e} />
                            </Grid>)
                            : experiments.map(e => <Grid item key={e._id}>
                                <ExperimentCard setExperiment={props.setExperiment} experiment={e} />
                            </Grid>)
                        }
                    </Grid >
                </div>
                : null
            }

        </div>
    );
}