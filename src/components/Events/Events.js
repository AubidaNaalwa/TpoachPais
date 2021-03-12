import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PageNotFound from '../PageNotFound';
import LoadingSpinner from '../LoadingSpinner';
import SnackBar from '../SnackBar';
import { useLocation } from 'react-router-dom';
import { SNACKBAR_PROPS, API_PATH } from '../../Constants';

export default function Events(props) {
    const [events, setEvents] = useState([]),
    [isLoading, setLoading] = useState(true),
    [snack, setSnack] = useState(''),
    getPath = useLocation().pathname.includes('/space') ? "space" : "tpais";

    const handleRemove = (id) => {
        try {
            axios.delete(`${API_PATH}/${getPath}/events/delete/${id}`);
            const tempEvents = [...events];
            const i = tempEvents.findIndex(e => e._id === id);
            tempEvents.splice(i, 1);
            setEvents(tempEvents);
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_REMOVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleEdit = (event) => {
        try {
            axios.put(`${API_PATH}/${getPath}/events/update/${event._id}`, event);
            const tempEvents = [...events];
            const i = tempEvents.findIndex(e => e._id === event._id);
            tempEvents[i] = event;
            setEvents(tempEvents);
            setSnack({ message: SNACKBAR_PROPS.MessageType.SUCCESS_SAVED, severity: SNACKBAR_PROPS.SeverityType.SUCCESS });
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    useEffect(() => {
        async function fetchEvents() {
            try {
                const events = await axios.get(`${API_PATH}/${getPath}/events`);
                setEvents(events.data.events);
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
            finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, [getPath]);

    return (
        <>
            <Grid container direction="row" justify="space-evenly" spacing={3}>
            {
                isLoading ? <LoadingSpinner /> :
                events.length > 0 ? events.map(e => (
                    <Grid item key={e._id}>
                        <EventCard setEvent={props.setEvent} handleRemove={handleRemove} handleEdit={handleEdit} event={e} />
                    </Grid>
                ))
                : <PageNotFound />
            }
            </Grid>
            <SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
        </>
    );
}