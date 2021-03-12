import React, { useEffect, useState } from 'react';
import ExperimentCard from './ExperimentCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PageNotFound from '../PageNotFound';
import SnackBar from '../SnackBar';
import LoadingSpinner from '../LoadingSpinner';
import { SNACKBAR_PROPS, API_PATH } from '../../Constants';
import { useLocation } from 'react-router-dom';
const axios = require('axios');

const useStyles = makeStyles(() => ({
    category: {
        backgroundColor: '#3f5160',
        color: 'white',
        padding: 12,
        width: '10em',
        border: 'none',
        fontSize: '80%',
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
        outline: 'none',
        borderRadius: 5,
        marginBottom: 14
    }
}));

export default function Experiments(props) {
    const classes = useStyles(),
    [experiments, setExperiments] = useState([]),
    [isLoading, setLoading] = useState(true),
    [snack, setSnack] = useState(''),
    [select, setSelect] = useState(""),
    getPath = useLocation().pathname.includes('/space') ? "space" : "tpais";

    const handleSelect = (e) => {
        setSelect(e.target.value);
    }

    const handleRemove = (id) => {
        try {
            axios.delete(`${API_PATH}/${getPath}/experiments/delete/${id}`);
            const tempExperiments = [...experiments];
            const i = tempExperiments.findIndex(e => e._id === id);
            tempExperiments.splice(i, 1);
            setExperiments(tempExperiments);
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_REMOVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleEdit = (experiment) => {
        try {
            axios.put(`${API_PATH}/${getPath}/experiments/update/${experiment._id}`, experiment);
            const tempExperiments = [...experiments];
            const i = tempExperiments.findIndex(e => e._id === experiment._id);
            tempExperiments[i] = experiment;
            setExperiments(tempExperiments);
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    useEffect(() => {
        async function fetchExperiments() {
            try {
                const experiments = await axios.get(`${API_PATH}/${getPath}/experiments`);
                setExperiments(experiments.data.experiments);
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
            finally {
                setLoading(false);
            }
        }
        fetchExperiments();
    }, [getPath]);

    return (
        <div>
            {
                getPath === 'tpais' &&
                <div>
                    <select className={classes.category} name="category" value={select} onChange={handleSelect}>
                        <option value="">جميع الفئات</option>
                        <option value="Ch">كيمياء</option>
                        <option value="Ph">فيزياء</option>
                        <option value="Bio">بيولوجيا</option>
                    </select>
                </div>
            }
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
            {
                isLoading ? <LoadingSpinner /> :
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