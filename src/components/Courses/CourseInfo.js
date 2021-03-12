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
    },
    duration: {
        textAlign: 'end',
        marginTop: 30,
        marginLeft: 30,
        color: '#138444'
    },
    courseLink: {
        color: '#1e7324',
        fontSize: '110%',
        letterSpacing: 2,
        '&:hover': {
            color: '#1e4424'
		}
    },
    center: {
        textAlign: 'center'
    },
    noSigns: {
        textAlign: 'center',
        color: '#6a6363',
        fontSize: '110%',
        letterSpacing: 2,
        cursor: 'not-allowed'
    }
}));

export default function CourseInfo(props) {
    const classes = useStyles(),
    [data, setData] = useState(null),
    [snack, setSnack] = useState(''),
    [isLoading, setLoading] = useState(true),
    { id } = useParams();

    useEffect(() => {
        const getDataById = async() => {
            try {
                const results = await axios.get(`${API_PATH}/courses/id/${id}`);
                const {name, createdAt, longDescription, duration, available, courseLink} = results.data;
                await setData ({name, createdAt, longDescription, duration, available, courseLink});
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
            finally {
                setLoading(false);
            }
        }

        if (props.cInfo) {
            setData(props.cInfo);
            setLoading(false);
        }
        else if (id)
            getDataById();

    }, [props.cInfo, id]);

    return (
        <>
        {
            isLoading ? <LoadingSpinner /> :
            data ?
            <>
                <h1 className={classes.header}>{data.name}</h1>
                <h5 className={classes.createdAt}><Moment format="LLL">{data.createdAt}</Moment></h5>
                <div>{data.longDescription}</div>
                <div className={classes.duration}>{data.duration}</div>
                {
                    data.available && data.courseLink ?
                    <div className={classes.center}><a className={classes.courseLink} href={data.courseLink} rel='noreferrer' target='_blank'>اضغط هنا للتسجيل</a></div>
                    :
                    <div className={classes.noSigns}>انتهت صلاحية التسجيل</div>
                }
            </>
            : <PageNotFound />
        }
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
        </>
    );
}