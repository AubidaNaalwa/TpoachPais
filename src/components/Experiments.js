import React, { useEffect, useState } from 'react';
import ExperimentCard from './ExperimentCard';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/AubidaStyle.css'
const axios = require('axios');


export default function Experiments(props) {
    const [experiments, setExperiments] = useState([])
   

    const fetchExperiments = async () =>{
        const res = await axios.get("/experiments");
        setExperiments(res.data.experiments);
    }

    useEffect(() => { 
        fetchExperiments() },
        []);

    return (
        <div className="AubidaStyle">
            {
               experiments ? experiments.map(value => (
                    <ExperimentCard key={value.date} setExperiment={setExperiments} experiment={value} />
                )):null
            }
        </div>
    );
}