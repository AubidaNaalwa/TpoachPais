import React, { useEffect, useState } from 'react';
import ExperimentCard from './ExperimentCard';
import Grid from '@material-ui/core/Grid';
import PageNotFound from '../PageNotFound';
import SnackBar from '../SnackBar';
import { SNACKBAR_PROPS, API_PATH } from '../../Constants';
const axios = require('axios');

export default function Experiments(props) {
    const [experiments, setExperiments] = useState([]),
    [currPath, setCurrPath] = useState(''),
    [isSpaceSite, setIsSpaceSite] = useState(0),
    [snack, setSnack] = useState(''),
    [select, setSelect] = useState("");

    const handleSelect = (e) => {
        setSelect(e.target.value);
    }

    const handleRemove = (id) => {
        try {
            axios.delete(`${API_PATH}/${currPath}/experiments/delete/${id}`);
            const tempExperiments = [...experiments];
            const i = tempExperiments.findIndex(e => e._id === id);
            tempExperiments.splice(i, 1);
            setExperiments(tempExperiments);
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleEdit = (experiment) => {
        try {
            axios.put(`${API_PATH}/${currPath}/experiments/update/${experiment._id}`, experiment);
            const tempExperiments = [...experiments];
            const i = tempExperiments.findIndex(e => e._id === experiment._id);
            tempExperiments[i] = experiment;
            setExperiments(tempExperiments);
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    useEffect(() => {
        async function fetchExperiments() {
            try {
                let experiments;

                if (window.location.pathname === '/tpais/experiments') {
                    experiments = await axios.get(`${API_PATH}/tpais/experiments`);
                    setCurrPath('tpais');
                    setIsSpaceSite(false);
                }
                else {
                    experiments = await axios.get(`${API_PATH}/space/experiments`);
                    setCurrPath('space');
                    setIsSpaceSite(true);
                }
                setExperiments(experiments.data.experiments);
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
        }
        fetchExperiments();
    }, []);

    return (
        <div>
            {
                !isSpaceSite &&
                <div>
                    <select style={{ backgroundColor: '#3f5160', color: 'white', padding: 12, width: '10em', border: 'none', fontSize: '80%', boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)', outline: 'none', borderRadius: 5, marginBottom: 14 }} name="category" value={select} onChange={handleSelect}>
                        <option value="">جميع الفئات</option>
                        <option value="Ch">كيمياء</option>
                        <option value="Ph">فيزياء</option>
                        <option value="Bio">بيولوجيا</option>
                    </select>
                </div>
            }
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
            {
                experiments.length > 0 ?
                <Grid container direction="row" justify="space-evenly" spacing={3}>
                {
                    experiments.filter(fd => !select ? true : fd.category === select).map(e =>
                        <Grid item key={e._id}>
                            <ExperimentCard setExperiment={props.setExperiment} handleRemove={handleRemove} handleEdit={handleEdit} experiment={e} />
                        </Grid>
                    )
                }
                </Grid>
                : <PageNotFound />
            }
        </div>
    );
}