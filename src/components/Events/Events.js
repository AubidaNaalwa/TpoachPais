import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

export default function Events(props) {
    const [events, setEvents] = useState([]),
    [currPath, setCurrPath] = useState('');

    const handleRemove = (id) => {
        try {
            axios.delete(`/event/${currPath}/delete/id=${id}`);
            const tempEvents = [...events];
            const i = tempEvents.findIndex(e => e._id === id);
            tempEvents.splice(i, 1);
            setEvents(tempEvents);
        }
        catch (error) {
            console.log(error.toString());
        }
    }

    const handleEdit = (event) => {
        try {
            axios.put(`/event/${currPath}/update/id=${event._id}`, event);
            const tempEvents = [...events];
            const i = tempEvents.findIndex(e => e._id === event._id);
            tempEvents[i] = event;
            setEvents(tempEvents);
        }
        catch (error) {
            console.log(error.toString());
        }
    }

    useEffect(() => {
        async function fetchEvents() {
            let events;
            if (window.location.pathname === '/tpais/events') {
                events = await axios.get(`/events`);
                setCurrPath('tpoach');
            }
            else {
                events = await axios.get(`/space/events`);
                setCurrPath('space');
            }
            setEvents(events.data.events);
        }
        fetchEvents();
    }, []);

    return (
        <Grid container direction="row" justify="flex-start" spacing={10} style={{ marginTop: -10, marginRight: -12 }}>
        {
            events.map(e => (
                <Grid item key={e._id}>
                    <EventCard setEvent={props.setEvent} handleRemove={handleRemove} handleEdit={handleEdit} event={e} />
                </Grid>
            ))
        }
        </Grid>
    );
}