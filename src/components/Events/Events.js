import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PageNotFound from '../PageNotFound';
import SnackBar from '../SnackBar';
import { SNACKBAR_PROPS, API_PATH } from '../../Constants';

export default function Events(props) {
    const [events, setEvents] = useState([]),
    [snack, setSnack] = useState(''),
    [currPath, setCurrPath] = useState('');

    const handleRemove = (id) => {
        try {
            axios.delete(`${API_PATH}/${currPath}/events/delete/${id}`);
            const tempEvents = [...events];
            const i = tempEvents.findIndex(e => e._id === id);
            tempEvents.splice(i, 1);
            setEvents(tempEvents);
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    const handleEdit = (event) => {
        try {
            axios.put(`${API_PATH}/${currPath}/events/update/${event._id}`, event);
            const tempEvents = [...events];
            const i = tempEvents.findIndex(e => e._id === event._id);
            tempEvents[i] = event;
            setEvents(tempEvents);
        }
        catch (err) {
            setSnack({ message: err.message, severity: SNACKBAR_PROPS.SeverityType.ERROR });
        }
    }

    useEffect(() => {
        async function fetchEvents() {
            try {
                let events;
                if (window.location.pathname === '/tpais/events') {
                    events = await axios.get(`${API_PATH}/tpais/events`);
                    setCurrPath('tpais');
                }
                else {
                    events = await axios.get(`${API_PATH}/space/events`);
                    setCurrPath('space');
                }
                setEvents(events.data.events);
            }
            catch {
                setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
            }
        }
        fetchEvents();
    }, []);

    return (
        <>
            <Grid container direction="row" justify="space-evenly" spacing={3}>
            {
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