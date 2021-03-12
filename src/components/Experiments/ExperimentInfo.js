import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import PageNotFound from '../PageNotFound';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import { API_PATH } from '../../Constants';
import SnackBar from '../SnackBar';
import { SNACKBAR_PROPS } from '../../Constants';
import LoadingSpinner from '../LoadingSpinner';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    header: {
        marginTop: 0,
        marginBottom: 5,
        color: 'brown'
    },
    createdAt: {
        color: '#4d0f1a',
        marginTop: -5
    }
}));

export default function ExperimentInfo(props) {
    const classes = useStyles(),
    [data, setData] = useState(null),
    [snack, setSnack] = useState(''),
    [isLoading, setLoading] = useState(true),
    { id } = useParams();

    useEffect(() => {
        const getDataById = async() => {
            try {
                const results = await axios.get(`${API_PATH}/experiments/id/${id}`);
                const {name, createdAt, longDescription} = results.data;
                await setData ({name, createdAt, longDescription});
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
            finally {
                setLoading(false);
            }
        }

        if (props.eInfo) {
            setData(props.eInfo);
            setLoading(false);
        }
        else if (id)
            getDataById();

    }, [props.eInfo, id]);

    return (
        <>
        {
            isLoading ? <LoadingSpinner /> :
            data ?
            <>
                <h1 className={classes.header}>{data.name}</h1>
                <h5 className={classes.createdAt}><Moment format="LLL">{data.createdAt}</Moment></h5>
                <div>{data.longDescription}</div>
            </>
            : <PageNotFound />
        }
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
        </>
    );
}