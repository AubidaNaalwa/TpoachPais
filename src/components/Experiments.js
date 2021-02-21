import React, { useEffect } from 'react';
import ExperimentCard  from './ExperimentCard';
import '../styles/AubidaStyle.css'
const axios = require('axios');



export default function Experiments(props) {
    
    const [experiments, setExperiments] = React.useState([]),
     
        func = props.setExperiment;

  
    async function fetchExperiments() {
        const res = await axios.get("/experiments");
        console.log(res);
        setExperiments(res.data.experiments);
    }

    useEffect(() => { fetchExperiments() }, [])

    return (

        <div className="AubidaStyle">
            {
                experiments.map((value) => (
                    <ExperimentCard setExperiment={func} experiment={value} />
                ))
            }
        </div>

    );
}




